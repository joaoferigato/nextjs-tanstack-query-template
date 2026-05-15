import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/tanstack-query/get-query-client";
import PokemonListClientFromServer from "@/components/pokemon-list-client-from-server";
import { fetchAllPokemon } from "@/lib/pokemon-api-calls";

export default async function PokemonListServerPrefetched() {
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["pokemonList"],
        queryFn: fetchAllPokemon
    })

    return (
        <section>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <h1>Pokemon List Server + Client</h1>
                <PokemonListClientFromServer/>
            </HydrationBoundary>
        </section>
    )
}