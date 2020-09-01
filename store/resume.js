export const state = () => ({
  images: [],
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
  getImages(context){
    return this.$axios.$get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      context.images=res;
      console.log(context.images)
      return res;
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// getters
export const getters = {
  getTenImages(state){
    return state.images;
  }
}
