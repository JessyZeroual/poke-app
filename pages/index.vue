<template>
  <div class="container">
    <h2>Pokemons</h2>
    <ul class="users">
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <NuxtLink :to="'/pokemons/' + pokemon.name">
          {{ pokemon.name }}
        </NuxtLink>
        <img :src="pokemon.imageUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ store }) {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );

    await data.results.map(pokemon => {
      pokemon.id = pokemon.url.substring(34).slice(0, -1);
      pokemon.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
        .substring(34)
        .slice(0, -1)}.png `;
    });

    await store.dispatch("pokemon/all", data.results);

    return { pokemons: store.state.pokemon.pokemons };
  }
};
</script>
