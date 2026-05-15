import { getQueryClient } from "@/tanstack-query/get-query-client";
import { fetchAllPokemon } from "@/lib/pokemon-api-calls";
import { type PokemonList } from "@/lib/pokemon-api-calls";

export default async function PokemonListServer() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchAllPokemon,
    })

    const data: PokemonList = queryClient.getQueryData(["pokemonList"]) ?? []

    return (
        <section>
            <h1>Pokemon List Server</h1>
            <ul>
                {data.map((e) => <li key={e.name}>{e.name}</li>)}
            </ul>
        </section>
    )
}