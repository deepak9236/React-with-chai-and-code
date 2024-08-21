// AuthLayout component ek mechanism hai jisko uses se pages or routes ko protect kiya jata hai
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    // check kar raha ha user login hai ki nahi
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // hum kude check kar rahe hai user apne mn se nahi batta raha user login hai i nahi
        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false
        // authStatus !== authentication--> ya code replace ho jayega "authService" se agar upar vala line use kar rahe hai tab

        // authStatus:- hum kude check kar rahe hai user login hai ki nahi
        // authentication:- user batta raha hai ki login hu
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

