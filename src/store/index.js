import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State
// 浏览器自动检测，如果浏览器设置暗模式，我们的程序也会首选暗模式
if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";
const state = {
  isDarkMode: userSelectedDarkMode,
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};
// Mutations
const Mutations = {
  toggleDarkMode() {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      window.document.body.style.background = "#f0f3f5";
      // 使用localStorage 使数据持久化
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      window.document.body.style.background = "#212c4f";
      // 使用localStorage 使数据持久化
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};
// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};
export default new Vuex.Store({
  // 状态 只是一组数据值
  state: state,
  // 获取器 一组检索状态的函数
  getters: getters,
  // 突变 一组已经改变状态的函数
  mutations: Mutations,
  // 行动 //你可以同时执行多部操作
  actions: actions,
  modules: {},
});
