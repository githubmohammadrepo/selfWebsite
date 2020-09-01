export const state = () => ({
  practiceDialog: false,
  realDialog: false,
})
// mutations
export const mutations = {
  togglePracticeDialog(state) {
    state.practiceDialog = !state.practiceDialog
  },
  toggleRealDialog(state) {
    state.realDialog = !state.realDialog
  }
}
// actions
export const actions = {
  add(context) {
    // go some where
  }
}
// getters
export const getters = {
}
