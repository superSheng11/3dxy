const mutations = {
  change_show(state) {
    console.log(state);
    state.leftShow = !state.leftShow;
  }
};
export default mutations;
