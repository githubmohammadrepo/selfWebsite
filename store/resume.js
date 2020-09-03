/* eslint-disable eqeqeq */
export const state = () => ({
  images: [],
  practiceDialog: false,
  realDialog: false,
  showStatusSnackbar:false,
  snackbarTextStatus:'default text for status snackbar'
})
// mutations
export const mutations = {
  togglePracticeDialog(state) {
    state.practiceDialog = !state.practiceDialog
  },
  toggleRealDialog(state) {
    state.realDialog = !state.realDialog
  },
  toggleShowSnackbar(state,payload){
    if(payload===false){
      state.showStatusSnackbar = payload;
    }else{
      state.showStatusSnackbar = !state.showStatusSnackbar;
    }
  },
  setSnackbarStatusText(state,payload){
    state.snackbarTextStatus = payload;
  }
}
// actions
export const actions = {
  getImages(context, payload) {
    let url;
    if(payload == 'html'){
      url = 'https://jsonplaceholder.typicode.com/photos';
    }else if(payload == 'css') {
      url = 'https://jsonplaceholder.typeicode.com/posts';
    }else{
      // do some thing else
    }
    alert(payload)
    return this.$axios.$get(url)
      .then(res => {
        context.images = res.filter(data => {
          return res.indexOf(data) < 20;
        })
        return context.images;
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log('error connection by mohammad',err)
      })
  },
}
// getters
export const getters = {
  getTenImages(state) {
    return state.images;
  }
}
