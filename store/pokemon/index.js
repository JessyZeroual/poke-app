export const state = () => ({
  pokemons: []
});

export const mutations = {
  SET_POKEMON: (state, pokemons) => (state.pokemons = pokemons)
};

export const actions = {
  all({ commit }, pokemons) {
    console.log(123);
    commit('SET_POKEMON', pokemons);
  }
};
