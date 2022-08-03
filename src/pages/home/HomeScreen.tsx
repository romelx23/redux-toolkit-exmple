import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { decrement, incremenByAumount, increment } from '../../store/slices';

export const HomeScreen = () => {
  const {count}=useAppSelector(state=>state.counter);
  const dispatch=useAppDispatch();
  const handleIncrement=()=>{
    dispatch(increment());
  }
  const handleDecrement=()=>{
    dispatch(decrement());
  }

  const handleIncrementAmount=()=>{
    dispatch(incremenByAumount(5));
  }

  return (
    <div className='flex flex-col items-center justify-center text-white '>
      <h1 className='font-semibold py-2' >Counter App con Redux</h1>
      <div className='flex border border-purple-500 p-5 flex-col'>
        <div className='flex justify-around'>
        <button className='border border-purple-500 w-8 h-8 rounded-full' onClick={handleDecrement}>-1</button>
        <button className='border border-purple-500 w-8 h-8 rounded-full' onClick={handleIncrement}>+1</button>
        <button className='border border-purple-500 w-8 h-8 rounded-full' onClick={handleIncrementAmount}>+5</button>
        </div>
        <h1>La cuenta es: {count}</h1>
      </div>
    </div>
  )
}
