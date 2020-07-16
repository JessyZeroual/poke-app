<template>
  <div class="row d-flex justify-content-center">
    <b-card
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :title="pokemon.name"
      :img-src="pokemon.imageUrl"
      :img-alt="'Image of' + ' ' + pokemon.name"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 mx-1"
    >
      <NuxtLink :to="'/pokemon/' + pokemon.id">
        <b-button variant="primary">detail</b-button>
      </NuxtLink>
    </b-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    pokemons: []
  }),

  mounted() {
    this.pokemons = this.$store.state.pokemon.pokemons;
  }
};
</script>
