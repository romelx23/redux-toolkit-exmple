import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "../../store/apis";

export const TodosPage = () => {
    const [count, setCount] = useState(1);
//   const { data:todos, isLoading } = useGetTodosQuery();
    const { data:todo, isLoading,refetch } = useGetTodoQuery(`${count}`);
    const handleNext=()=>{
        setCount(count+1);
    }
    const handlePrev=()=>{
        if(count===1)return;
        setCount(count-1);
    }
    const handleClick=()=>{
        refetch();
    }
  // console.log(algo);
  return (
    <div className="p-4 text-white">
      <div className="flex flex-col">
        <h1 className="text-center text-white font-semibold py-2">
          TodosPage - RTK Query
        </h1>
        <hr />
        {isLoading && (
          <>
            <h4>isLoading...</h4>
            <div className="border-4 border-r-transparent border-blue-700 rounded-full w-8 h-8 animate-spin"></div>
          </>
        )}
        <pre>...</pre>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
        {/* <ul>
            {
                todos?.map((todo,i)=>(
                    <li key={todo.id} className="mb-2 flex">
                        <p>{i+1}.-{todo.title}</p>
                        <strong>{todo.completed?'(completado)':'(no completado)'}</strong>
                    </li>
                ))
            }
        </ul> */}
        <button 
        onClick={handlePrev}
        className="border border-blue-600 hover:bg-blue-600 transition py-1">
          Anterior Tarea
        </button>
        <button 
        onClick={handleNext}
        className="border border-blue-600 hover:bg-blue-600 transition py-1">
          Siguiente Tarea
        </button>
        <button 
        onClick={handleClick}
        className="border border-blue-600 hover:bg-blue-600 transition py-1">
          Cargar Todos Reforzado
        </button>
      </div>
    </div>
  );
};
