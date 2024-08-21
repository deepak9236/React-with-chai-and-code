
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login /> {/*  in sabhi component ko global store ka access milaga */}
      <Profile /> 
    </UserContextProvider>
  )
}

export default App
