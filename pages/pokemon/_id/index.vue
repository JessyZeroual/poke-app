<template>
  <div class="row d-flex justify-content-center">hello {{ pokemon.name }}</div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ store, route }) {
    if (store.state.pokemon.pokemons.length) {
      return {
        pokemon: store.state.pokemon.pokemons.find(
          pokemon => pokemon.id === route.params.id
        )
      };
    } else {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
      );
      return { pokemon: { name: data.name } };
    }
  }
};
</script>
