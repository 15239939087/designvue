<template>
  <div>
    <!-- <button @click="toggleDarkMode">Toggle</button> -->
    <div
      @click="toggleDarkMode"
      class="toggle"
      :class="{ 'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode }"
    >
      <div class="toggle-switch" :class="{'toggle-left': !isDarkMode,'toggle-right': isDarkMode}">
        <img v-if="isDarkMode" src="@/assets/sun.svg" alt width="30px" height="30px" />
        <img v-if="!isDarkMode" src="@/assets/moon.svg" alt width="30px" height="30px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      // 发送store的数据
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  border-radius: 10px;
  width: 132px;
  height: 50px;
  box-sizing: border-box;
  margin: 25px auto;
  display: flex;
}
.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}
.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}
.toggle-switch {
  margin: 2px;
  padding: 5px 15px;
  border-radius: 8px;
}
.toggle-left {
  transform: translateX(2%);
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.toggle-right {
  transform: translateX(112%);
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
