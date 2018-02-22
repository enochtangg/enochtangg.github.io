<template>
    <div class="md-layout">
        <md-content class="md-primary" id="header">
            <div class="header-container">
                <h1>My Passions and Personality</h1>
                <p class="subheading">Discover who I am as a person aside from being a developer</p>
            </div>
        </md-content>

            <div class="fact-card">
                <h2 class="content-title">A few fun facts about myself...</h2>
                <p class="content-content">I love a genuine bowl of Vietnamese phở, I train Muay Thai like it's
                    a lifestyle, my favourite film series is Star Wars, I'm not a huge fan of listening to
                    popular music, I enjoy taking photographs of random things, I recently started a hobby in reading,
                    and I've had my appendix removed.</p>
            </div>

        <!--<md-card class="md-raised">-->
        <!--<md-card-header>-->
        <!--<md-avatar>-->
        <!--<img src="/pictures/wall-portrait.png" alt="Avatar">-->
        <!--</md-avatar>-->
        <!--<md-card-header-text>-->
        <!--<div class="md-title">Enoch Tang</div>-->
        <!--</md-card-header-text>-->
        <!--</md-card-header>-->
        <!--<md-card-media>-->
        <!--&lt;!&ndash;<img src="/pictures/portrait.png">&ndash;&gt;-->
        <!--</md-card-media>-->
        <!--<md-card-content>-->
        <!--<div class="md-subhead"><p>"If you want something new, you have to stop doing something old."-->
        <!--My name is Enoch and welcome to the website I've made using the Vue framework.-->
        <!--With a passion to change the world through programming and design, I am-->
        <!--currently studying Systems Design Engineering at the University of Waterloo as an undergraduate-->
        <!--student.-->
        <!--Today, I am a software developer intern at Terrene Inc. which aims to simplify big data through-->
        <!--the use of neutral networks to produce predictive analysis. I always enjoy finding new things to-->
        <!--do and picking up new hobbies which brought me to creating this website from scratch.</p></div>-->
        <!--</md-card-content>-->

        <!--<md-card-actions>-->
        <!--<a class="btn btn-floating light-blue darken-2 pulse"><i class="material-icons">face</i></a>-->
        <!--</md-card-actions>-->
        <!--</md-card>-->
    </div>
</template>

<script>
  export default {
    name: "aboutme"
  }
</script>

<style scoped>
    .md-card {
        width: 50%;
        margin: auto;
        top: 100px;
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

    h1 {
        font-size: 250%;
    }

    .header-container {
        padding-left: 100px;
        padding-top: 30px;
        height: 200px;
    }

    #header {
        width: 100%;
    }

    .subheading {
        font-size: 140%;
        color: #C1BFBF;
        font-style: italic;
        font-family: cursive;
    }

    .fact-card {
        margin: auto;
        width: 45%;
        padding-top: 50px;
    }

    .content-title {
        text-align: center;
        font-size: 210%;
    }

    .content-content {
        text-align: center;
        font-size: 130%;
        font-weight: 300;
    }
</style>
