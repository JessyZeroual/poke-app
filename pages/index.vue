<template>
  <div class="container-fluid">
    <h2>Pokemons</h2>
    <PokemonList />
  </div>
</template>

<script>
import axios from "axios";
import PokemonList from "@/components/PokemonList";

export default {
  async asyncData({ store }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=120"
    );

    await data.results.map(pokemon => {
      pokemon.id = pokemon.url.substring(34).slice(0, -1);
      pokemon.imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.url
        .substring(34)
        .slice(0, -1)}.png `;
    });

    await store.dispatch("pokemon/all", data.results);
  }
};
</script>
