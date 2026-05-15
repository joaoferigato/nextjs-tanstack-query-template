export interface Pokemon {
    name: string
    url: string
}

export type PokemonList = Pokemon[]

export async function fetchAllPokemon(): Promise<PokemonList> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")

    const responseJson = await response.json()

    return responseJson.results
}