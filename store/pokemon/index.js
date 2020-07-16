export const state = () => ({
  pokemons: []
});

export const mutations = {
  SET_POKEMON: (state, pokemons) => (state.pokemons = pokemons)
};

export const actions = {
  all({ commit }, pokemons) {
    commit("SET_POKEMON", pokemons);
  }
};
