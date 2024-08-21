// custom hooks:-
// ya hooks data lekar aaye ga API se:- useCurrencyInfo
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // useCurrencyInfo call hoga tab automatic useEffect call ho jayega 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  // data string se JSON me convert ho raha hai
        .then((res) => setData(res[currency])) // state me data send kar rahe hai(res[currency] and res.currency dono use kar sakte hai object access karne ke liya)
        console.log(data);
    }, [currency]) // currency me change ho tab useEffect dubar se call hoga currency hi dependency hai 
    console.log(data);
    return data
}

export default useCurrencyInfo;
