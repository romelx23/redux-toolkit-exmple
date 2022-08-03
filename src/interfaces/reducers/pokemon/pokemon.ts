export interface IPokemon {
    count: number,
    next: string,
    previous: string,
    results: IPokemonResult[]
}
export interface IPokemonResult {
    name: string,
    url: string
}
export interface IPokemonResultAndImage {
    name: string,
    url: string,
    pokemonImage: string
}