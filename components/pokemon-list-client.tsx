"use client"

import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "@/lib/pokemon-api-calls";

export default function PokemonListClient() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchAllPokemon,
    })

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <section>
            <h1>Pokemon List Client</h1>
            <ul>
                {data?.map((e) => <li key={e.name}>{e.name}</li>)}
            </ul>
        </section>
    )
}