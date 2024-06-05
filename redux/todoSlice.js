import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state = initialState, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state = initialState, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    changeTodoStatus: (state = initialState, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, check: !todo.check } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;
