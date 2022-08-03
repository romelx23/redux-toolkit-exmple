import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getPokemons } from '../../store/slices'

export const PokemonScreen = () => {
    const {pokemons,isLoading,page}=useAppSelector(state=>state.pokemon);
    const dispatch=useAppDispatch();
    const handlePokemons=()=>{
      dispatch(getPokemons(page));
    }

    const handlePrev=()=>{
      dispatch(getPokemons(page-2));
    }
    
  return (
    <div className='p-5'>
        <div className='flex justify-between pb-2'>
        <h1 className='text-white font-semibold'>PokemonScreen</h1>
        <button className='btn-primary-2' onClick={handlePrev}>
          Atrás
        </button>
        <button 
        onClick={handlePokemons}
        className='btn-primary-2'>
          {
            page===0&&'Cargar Pokemons'
          }
          {
            page>0&&'Siguiente'
          }
          </button>
        </div>
        <hr />
        {
            isLoading&&
            <div className='border-4 border-r-transparent border-blue-700 rounded-full w-8 h-8 animate-spin'>
                
            </div>
        }
        <p className='text-white'>página {page}</p>
        <ul className='list-disc px-5 mt-2 text-white'>
          {
            pokemons.map(pokemon=>(
              <li key={pokemon.name} className='mb-2'>
                <p>{pokemon.name}</p>
                <img src={pokemon.pokemonImage} alt={pokemon.name} className="w-12 h-12 hover:scale-150 transition" />
              </li>
            ))
          }
        </ul>
    </div>
  )
}
