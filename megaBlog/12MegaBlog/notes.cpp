npm create vite@latest
react
javaScript

bun i
npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

appwrite setting:- backend as a service:-
    1. Create Project
    2. Setting me ja kar ProjectID and API EndPoint copy kare gaye aur Envoriment Variable me paste kare gaye 
    3. API EndPoint:- VITE_APPWRITE_URL <-- paste karna hai

    Auth:- By default jo hai vahi hai

    database:-
    Create Data Base:- id envoirement variable me paste kar lo
    database me hi Create collection karo:-  collection id variable me paste kar lo
    collection ke settting me update permissionns karo:-  all Users:- create, read, update, delete
    attribute ko bhi karne hai:- Create attribute-- string--> Attribute Key:- (title, content, featuredImage, status, userId--> (sabhi attribute banna lo))--> Size:- 255
    index bi laga sakte-->Create index-->(index key:- status, index type:- Key, attribute:- status, Order:- ASC)--> create (statuse ab key hai)
    

    Storage:-
    create Bucket:- id envoirement variable me paste kar lo
    bucket ki setting me:- update Permissions karna hai():- all Users:- create, read, update, delete


Environment variable:-
    create-react-app se banna hai to Envoriment variable me "REACT_APP_" likana jaruri hai variable name me 
    vo variable jo system variable bante hai(vo share nahi kar sakte hai)
    production me bhi ya Environment variable nahi jaate hai(bas use variable ka naam jata hai)
    Environment variable root me hona chahiya.
    .env file hi Environment variable file hota hai(es Environment variable ko Production and Github par shift nahi karte hai)
    Environment varible me change kare gaye tab project re-run kar lo.
    SET By:- VITE_APPWRITE_URL="test environment"
    ACCESS By:- console.log(import.meta.env.VITE_APPWRITE_URL);
    Alag-Alag Framework me alag-alag tarike se set aur access kiya jata hai

Important:-
Note:- jab class bannate hai us class ko use karne ke liya humko object bananana padega.
        First way:- ussa oject se class me member ko use kar sakte hai
        secound way:- Object baanna kar export kar do(class ke sabhi methods lage hoge pehle se). jaha use karna hoga vaa par object ko import karo aur use karo
                const authService = new AuthService();
                export default authService;

Imprtant:-
What is forwordRef:-
agar ek login page banna rahe hai aur uska input field alag component me bannae hai--> use Input field ke state ka access Login page par chahiya hoga uske refrence pass karte hai forwordRef me
ya same kaam bina forwordRef ke bhi kar sakte hai react-form me ya feature already hota hai(see code RTE.jsx)

// dout:-
// syntex:- {...register(key ,option)} 
{...register("email", {
    required: true,
    validate: {
      matchPatern: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        "Email address must be a valid address",
    },
})}

// Regex:- /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) --> email validation
// to form regex:- https://regexr.com/


blog:- 

notes :- above
.env
conf.js
auth.js
config.js
store.js
auth.Slice.js
component--> index.js
App.jsx
index.js
Header.jsx
logoutBtn.jsx
Container.jsx
Logo.jsx
Footer.jsx
Login.jsx
Button.jsx
input.jsx
Signup.jsx

Select.jsx
PostCard.jsx
RTE.jsx
PostForm.jsx
signup.jsx -->pages
Login.jsx --> pages
AddPost.jsx
AllPost.jsx
editPost.jsx
Home.jsx
Post.jsx
main.jsx

8:11










git config --global user.email "deepakcsit0101@gmail.com"
git config --global user.name "Deepak Kumar Paswan"