import {createContext, useContext} from "react"

export const TodoContext = createContext({
    // todos ki value hoga jab context bane ga
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // todo ke methods honga jab context banne ga but methid ki functionallity App.js me likha hai
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider