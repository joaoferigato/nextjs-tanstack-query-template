import PokemonListClient from "@/components/pokemon-list-client";
import PokemonListServer from "@/components/pokemon-list-server";
import PokemonListServerPrefetched from "@/components/pokemon-list-server-prefetched";

export default function Page() {
    return (
        <div className="m-4 flex flex-col gap-4">
            <h1>Tanstack Query</h1>
            <PokemonListClient />
            <PokemonListServer />
            <PokemonListServerPrefetched />
        </div>
    )
}