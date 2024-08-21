import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// jab bhi edit button par click hoga tab post ka sabhi detail aa jayega.
// ussi post ke sath default value aa jayegi(vo default value appwrite database se laaye ga || ya jo mention hai)
export default function PostForm({ post }) {
  // useForm se sahi chiza la lo jo use karne hai
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  // userdata store se aa jayega
  const userData = useSelector((state) => state.auth.userData);

  // user jab form submit karega
  const submit = async (data) => {
    // post hai already to update karo aur agar post nahi hai to ne post create karo
    if (post) {
      // new file upload karo
      // agar image hai to file upload kar do nahi to null kar do
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      // upload kar doiya hai upar but purani image delete kar do
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      // post update kar do update ke liya jo jaruri hai pass kar do
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        // agar file hai to uski id featuredImage me daal do nahi hai to undefined kr do
        featuredImage: file ? file.$id : undefined,
      });

      // dbPost aa gaya hai to user ko navigate kara do
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // post nahi hoga tab else case chale ga
      // new form create hoga else me
      // user file de dega usko upload kar do by the help of method of appwrite
      // TO do:- upar wale ki tarah kar sakte file hai tabhi upload karo
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id; // file id le lo
        data.featuredImage = fileId; // update kar do data ke andar jo featuredImage hai fileId se
        const dbPost = await appwriteService.createPost({
          // post create kar do
          ...data,
          userId: userData.$id,
        });

        // dbPost aa gaya hai to user ko navigate kara do
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };


  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  // Slug transform:- two input hai(tittle and slug) tittle ko wach karke slug me genarate karna hai.
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}