"use client"

import { useQuery } from "@tanstack/react-query";
import { type PokemonList } from "@/lib/pokemon-api-calls";

export default function PokemonListClientFromServer() {
    const { isPending, isError, data, error } = useQuery<PokemonList>({
        queryKey: ["pokemonList"],
        queryFn: () => Promise.resolve([]),
    })

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <section>
            <ul>
                {data?.map((e) => <li key={e.name}>{e.name}</li>)}
            </ul>
        </section>
    )
}