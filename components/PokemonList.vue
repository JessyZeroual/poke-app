<template>
  <div>
    <div class="row d-flex justify-content-center">
      <b-input
        class="w-50 my-4"
        type="text"
        v-model="search"
        placeholder="search pokemons"
      />
    </div>
    <div class="row d-flex justify-content-center">
      <b-card
        v-for="pokemon in filteredPokemons"
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

      <div v-if="isLoading">
        loading...
      </div>

      <div
        class="text-danger"
        v-if="filteredPokemons.length === 0 && !isLoading"
      >
        Not available at the moment
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pokemons: [],
    search: "",
    isLoading: true
  }),

  mounted() {
    this.pokemons = this.$store.state.pokemon.pokemons;
    this.isLoading = false;
    // this.text = this.$store.state.search.text;
  },

  computed: {
    filteredPokemons: function() {
      return this.pokemons.filter(pokemon => pokemon.name.match(this.search));
    }
  }
};
</script>

<style></style>
