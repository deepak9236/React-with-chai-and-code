import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() // data daal rahe hai
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


// loader me ja raha Route ke:- see in main.js 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json() // Promise hai fir bhi return kar pa rahe hai 
    // lakin abhi respose me jo hai vo useState ki data me nahi ja paya hai:- uake liya ek aur Hooks use kare gaye useLoaderData
    // ab useState me nahi daal rahe data naam ki variable me daal rahe hai
}