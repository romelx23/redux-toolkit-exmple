import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPokemon,IPokemonResult, IPokemonResultAndImage } from "../../../interfaces"

interface IInitialState {
    page: number,
    pokemons: IPokemonResultAndImage[],
    isLoading: boolean,
}

const initialState:IInitialState={
    page:0,
    pokemons:[],
    isLoading:false,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true
        },
        setPokemons:(state,action:PayloadAction<IInitialState>)=>{
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
            state.page=action.payload.page
        }
    }
})

export const {startLoadingPokemons,setPokemons} = pokemonSlice.actions

export default pokemonSlice.reducer