<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-1" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/React.png" class="card-header" />
          <h3>React</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-2" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/redux.png" class="card-header" />
          <h3>Redux</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-3" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/Vue.png" class="card-header" />
          <h3>Vue</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-4" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/Angular.png" class="card-header" />
          <h3>Angular</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a href class="card card-5" :class="{'ligth-card':!isDarkMode,'dark-card':isDarkMode}">
          <img src="@/assets/slack.png" class="card-header" />
          <h3>Slack</h3>
          <p
            :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
          >React app for all team commun ication,it can change you</p>
        </a>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script> 
<style scoped lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/typography.scss";
.container {
  margin-left: 15px;
  margin-right: 15px;
}
h2 {
  @include heading-2;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card {
  width: 100%;
  max-width: 320px;
  height: 400px;
  border-radius: 10px;
  margin: 22.5px;
  text-align: center;
  text-decoration: none;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.card-header {
  width: 100px;
  border-radius: 10px 10px 0 0;
  margin: 25px;
}
h3 {
  @include heading-3;
}
p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 0;
  color: white;
}
.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}
.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);
  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>