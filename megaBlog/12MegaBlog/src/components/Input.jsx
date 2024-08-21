// What is forwordRef:-
// agar ek login page banna rahe hai aur uska input field alag component me bannae hai--> use Input field ke state ka access Login page par chahiya hoga uske refrence pass karte hai forwordRef me

import React, {useId} from 'react'

// Arrow Function Hai
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){ // refrennce pass kiya hai
    const id = useId()  // unique id genrate kar raha hai.
    return (
        <div className='w-full'>
            {/* labal pass kiya honge koi tab labal call ho jayega */}
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} // eske liya hi forwordref use kiya hai(parent component me reference dega)
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input