// import React from "react";
// // common Button ki UI bhi ek component me banna diya hai jo har jagh use kar sakte hai
// export default function Button({
//     children,
//     type = "button",
//     bgColor = "bg-blue-600",
//     textColor = "text-white",
//     className = "",
//     ...props /* user koi aur additional chiz send kar diya ho tab  */
// }) {
//     return (
//         <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
//             {children}
//         </button>
//     );
// }




import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
