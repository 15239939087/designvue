<template>
  <div>
    <router-view />
  </div>
</template>
<script>
// 导入animate.css
import "animate.css";
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>

<style lang="scss">
// 引入全局样式
@import "@/styles/colors.scss";
@import "@/styles/typography.scss";

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  margin: 0;
  background: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}
</style>
