import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])


  // method bana  rahe hai:- todo form me se jaye ga(addTodo ki functionallity define kar rahe hai)
  const addTodo = (todo) => {
    // purane todos ke sath new todos add kar rahe hai
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  // todos me search laga rahe hai aur fir update kar rahe hai
  // agar mil ja rah hai to new todo daal de rahe hai aur agar nahi mil raha hi to purana todo rehn de rahe hai 
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  // filter se sab aayega but jiski id match hogi vo nahi aaye ga 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // agar match kar raha  hai tab baaki sari value same rakho bas ek value ko change kardo completed(toggle hoga)
  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) // essa ya ptta chale ga ki localStorage me pehle se koi todo hai ki nahi(agar hoga tab usko UI par load kar daga)

    // agar todo hoga to set ho jayega aur UI me show ho jayega
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // todos me kuch change hoga tab todos localStorage me set kare ga
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    /* provider me value provide karega */
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
