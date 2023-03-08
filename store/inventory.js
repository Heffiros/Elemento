export const state = () => ({
  gold: 0
})

export const getters = {
  canMakeTrade: state => (goldNeeded) => {
    return (state.gold - goldNeeded) > 0
  }
}

export const mutations = {
  MUTATE_UPDATE_GOLD (state, value) {
    state.gold += value
  }
}

export const actions = {
  UPDATE_ADD_GOLD (store, value) {
    store.commit('MUTATE_UPDATE_GOLD', value)
  }
}
