import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  // Loading agar true hai tab show Loading icon--> useEffect abhi working me hai
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); // state change karne ke liya lagega

  useEffect(() => {
    // authService se puch raha current user kon hai
    authService
      .getCurrentUser()  // get userr se jo data return ho raha vahi userData me ja raha hai
      .then((userData) => {
        console.log("User Data: ", userData);
        // getCurrentUser data return karega vo data userData me jayega(userData ek variable koi naam ho sakta)
        if (userData) {
          dispatch(login({ userData })); // login action me jaye dispatch ho kar--> authSlice vale file me
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false)); // finally always run hota hai
  }, []);

  // conditional rendering
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;