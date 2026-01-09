import { create } from "zustand";

const TodoRawData = create((set) =>({
    todo: [],
    setTodo: (todo) => set({todo})
}))

export { TodoRawData };