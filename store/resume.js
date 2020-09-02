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
  },
}
// actions
export const actions = {
  getImages(context) {

    return this.$axios.$get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        context.images = res.filter(data => {
          return res.indexOf(data) < 100;
        })
        return context.images;
      })
      .catch(err => {
        context.images = [{ id: Math.random(), title: "هیچ پروژه ای یافت نشد" }];
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }
}
// getters
export const getters = {
  getTenImages(state) {
    return state.images;
  }
}
