<template>
  <transition name="fade-in-right" enter-active-class="animated fadeInRight">
    <div
      class="request"
      :class="{
                'light-request': isDarkMode,
                'dark-request': !isDarkMode
                }"
      v-show="show"
    >
      还没有账号吗?
      <router-link to="/request" class="resa">申请</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
.request {
  position: absolute;
  margin-left: 20px;
  top: 40px;
  right: 20px;
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}
.resa {
  margin-left: 15px;
  text-decoration: none;
}
// 必须放在.request后面
.light-request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}
.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: black;
  }
}
</style>