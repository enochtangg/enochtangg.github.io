<template>
  <div class="md-layout">
      <md-card class="md-raised">
        <md-card-header>
          <md-avatar>
            <img src="/pictures/wall-portrait.png" alt="Avatar">
          </md-avatar>
          <md-card-header-text>
            <div class="md-title">Who Am I?</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-media>
          <!--<img src="/pictures/portrait.png">-->
        </md-card-media>
        <md-card-content>
          <div class="md-subhead"><p>"If you want something new, you have to stop doing something old."
            My name is Enoch and welcome to the website I've made using the vue.js framework.
            With a passion to change the world through programming and design, I am
            currently studying Systems Design Engineering at the University of Waterloo as an undergraduate student.
            Today, I am a software developer intern at Terrene Inc. which aims to simplify big data through
            the use of neutral networks to produce predictive analysis. I always enjoy finding new things to
            do and picking up new hobbies which brought me to creating this website from scratch.</p></div>
        </md-card-content>

        <md-card-actions>
          <!--<md-button>Learn More</md-button>-->
          <a class="btn btn-floating light-blue darken-2 pulse"><i class="material-icons">face</i></a>
        </md-card-actions>
      </md-card>

    <!--fade in other cards-->
    <!--<transition name="fade"></transition>-->
  </div>
</template>

<script>
  export default {
    name: "aboutme"
  }
</script>

<style scoped>
  .md-card{
    width: 50%;
    margin: auto;
    top: 200px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .md-card-actions {
    padding-right: 10px;
    padding-bottom: 10px;
  }
</style>
