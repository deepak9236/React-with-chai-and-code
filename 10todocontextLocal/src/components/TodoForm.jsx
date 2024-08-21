import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("") // individual Todo ke liya
    const {addTodo} = useTodo() // addTodo method call kar rahe hai context se

    const add = (e) => {
      e.preventDefault()

      if (!todo) return // agar  todo kai hoga to return ho jayega 

      addTodo({ todo, completed: false}) // agar todo me value hai to adTodo ko call kiya hai
      // addTodo({id: Date.now(), todo:todo, completed: false}) // yahi code likha hai just upar vali line me 
        //   todo:todo --> name and value same hai tab todo se replace ho jayega 
      
        setTodo("") // individual Todo useSate me jo hai usko khali kiya hai
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo} // useState vala todo hai link kar rahe hai
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;

// 56:28