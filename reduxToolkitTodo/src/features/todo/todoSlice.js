import {createSlice, nanoid } from '@reduxjs/toolkit';
//nanoid unique id genarate karega

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

// slice reducer ka baada version hai(reducer bas functionality hota hai)
export const todoSlice = createSlice({
    name: 'todo', // slice name
    initialState, // sabhi slice ka initial state hota hai
    reducers: { // reducer me properties aur function likha jate hai
        addTodo: (state, action) => { // context API me bas  Delclaration karte tha but in redux declaration ke sath defination bhi lika rahe hai
            const todo = { // todo ki properties set kar raha (id and text)
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo) // sate me send kar raha hai
        },
        removeTodo: (state, action) => { // delete kar raha hai
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer