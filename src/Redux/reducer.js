import { createSlice } from "@reduxjs/toolkit";

const sliceTodo = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    doTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
    
  },
});

export const { addTodo, removeTodo, doTodo } = sliceTodo.actions;

export default sliceTodo.reducer;
