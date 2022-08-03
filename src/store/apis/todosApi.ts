import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../../interfaces";

export const todosApi = createApi({
    reducerPath:'todos',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com',
    }),
    endpoints:(builder)=>({
        getTodos:builder.query<ITodo[],void>({
            query:()=>'/todos',
        }),
        getTodo:builder.query<ITodo,string>({
            query:(id)=>`/todos/${id}`,
        }),
    })
})

export const {useGetTodosQuery,useGetTodoQuery} = todosApi;