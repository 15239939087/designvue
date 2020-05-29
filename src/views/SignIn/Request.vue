<template>
  <div
    class="container"
    :class="{
            'light-background': !isDarkMode,
            'dark-background': isDarkMode
        }"
  >
    <div class="login">
      <img src="@/assets/17-earth.svg" alt="earth" v-show="isDarkMode" width="150px" />
      <img src="@/assets/Earthquake.svg" alt="earth" v-show="!isDarkMode" width="150px" />
      <h4
        :class="{
                    'light-text': isDarkMode,
                    'dark-text': !isDarkMode
                }"
      >申请账号</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="邮箱"
          :class="{
                        'light-field': isDarkMode,
                        'dark-field': !isDarkMode
                    }"
          v-model="email"
          required
        />

        <button>申请</button>
      </form>
      <router-link
        to="/signin"
        :class="{
                    'light-link': isDarkMode,
                    'dark-link': !isDarkMode
                }"
      >已经拥有账号? 登录</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Request",
  components: {
    ThemeSwitch
  },
  data() {
    return {
      email: null,
      password: null,
      text: "",
      hasText: false
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onSubmit() {}
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
@import "@/styles/typography.scss";

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
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin-top: 60px;
}
.login {
  width: 400px;
  text-align: center;
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
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
  color: white;
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
