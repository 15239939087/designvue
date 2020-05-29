<template>
  <div
    class="container"
    :class="{
        'light-background': !isDarkMode,
        'dark-background': isDarkMode
   }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/17-earth.svg" alt="earth" v-show="isDarkMode" width="150px" />
      <img src="@/assets/Earthquake.svg" alt="earth" v-show="!isDarkMode" width="150px" />
      <h4
        :class="{
            'light-text': isDarkMode,
            'dark-text': !isDarkMode
        }"
      >欢迎登录我的主页</h4>
      <!-- 阻止默认form事件 -->
      <form @submit.prevent="onSubmit">
        <input
          :class="{
            'light-field': isDarkMode,
            'dark-field': !isDarkMode
        }"
          type="email"
          placeholder="邮箱"
          required
        />
        <input
          :class="{
            'light-field': isDarkMode,
            'dark-field': !isDarkMode
        }"
          type="password"
          placeholder="密码"
          required
        />
        <button>登录</button>
      </form>
      <router-link
        to="/recover"
        :class="{
            'light-link': isDarkMode,
            'dark-link': !isDarkMode
       }"
      >忘记密码?</router-link>
      <br />
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import RequestAccount from "@/components/RequestAccount.vue";

export default {
  name: "SignIn",
  components: {
    ThemeSwitch,
    RequestAccount
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
// 引入全局样式
@import "@/styles/colors.scss";
@import "@/styles/typography.scss";
// 暗模式和亮模式
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}
.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}
.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  color: whitesmoke;
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  color: #161823;
}

// 主体
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 88vh;
  margin-top: 60px;
}
.login {
  width: 400px;
  text-align: center;
}
.notification {
  font-size: 12px;
}
h4 {
  margin: 0;
  line-height: 34px;
  font-size: 18px;
  text-align: center;
  color: white;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  width: 80%;
  font-size: 20px;
  color: #161823;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56ccf2;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  height: 45px;
  width: 80%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>