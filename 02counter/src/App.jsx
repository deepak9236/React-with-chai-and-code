import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  // ya previous counter par depend kar raha hai es liya React Fiber sabko alag-alag treat kare ga and increase by 4 
  const addValue = () => {
    //counter = counter + 1 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  // Sabhi setCounter ek hi kaam kar rahe hai:-
  // React fiber help kare ga sabko combine karke ek hi update karega by 1
  // const addValue = () => {
  //   //counter = counter + 1 
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)
  //   setCounter(counter + 1)
  // }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
