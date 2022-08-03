import { ThunkAction,AnyAction } from '@reduxjs/toolkit';
import { pokemonApi } from '../../../api/pokemonsApi';
import { IPokemon } from '../../../interfaces';
// import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { RootState } from '../../store';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';
export const getPokemons=(page=0):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async (dispatch,getState)=>{
        dispatch(startLoadingPokemons())
        // fetch
        // const resp= await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page*10}&limit=10`)
        // const data:IPokemon=await resp.json();
        // axios
        const resp=await pokemonApi.get<IPokemon>(`/pokemon?limit=10&offset=${page*10}`)
        console.log(resp.data);
        const {data}=resp;
        const {results}=data;
        const pokemons=results.map((pokemon,i)=>{
            const pokemonImage=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(i+1)*(page+1)}.png`
            return {...pokemon,pokemonImage}
        })
        // console.log(pokemons);
        dispatch(setPokemons({pokemons:pokemons,page:page+1,isLoading:false}))
    }
}