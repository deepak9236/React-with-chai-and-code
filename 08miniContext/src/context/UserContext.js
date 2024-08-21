import React from 'react'

const UserContext = React.createContext() // ya ek method hai
// context hi Global variable hai

export default UserContext;

// UserContext ke andar hi provider dena hota
// Sabhi Component ko wrrap kar denge UserContext se 