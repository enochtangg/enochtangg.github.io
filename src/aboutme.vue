<template>
    <div>
        <div class="md-layout">
            <md-content class="md-primary" id="header">
                <div class="header-container">
                    <h1>Passions and Personality</h1>
                    <p class="subheading">Discover who I am as a person aside from being a Systems Design Engineer</p>
                </div>
            </md-content>

            <div class="tiny-gap"></div>

            <div class="fact-card">
                <h2 class="content-title">A few fun facts about myself</h2>
                <p class="content-content">I love a genuine bowl of Vietnamese phở, I train Muay Thai like it's
                    a lifestyle, my favourite film director is Christopher Nolan, I'm not a huge fan of listening to
                    popular music, I enjoy taking photographs of random things, I recently started a hobby in reading,
                    and I've had my appendix removed.</p>
            </div>

            <div class="wrapper">
                <md-card class="md-raised" id="overview">
                    <md-card-header>
                        <md-avatar>
                            <img src="/pictures/wall-portrait.png" alt="Avatar">
                        </md-avatar>
                        <md-card-header-text>
                            <div class="md-title">Enoch Tang</div>
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-media>
                        <img src="/pictures/linkedin-enoch.jpg">
                    </md-card-media>
                    <md-card-content>
                        <div><p class="overview-content">
                            Considering this website is not Search Engine Optimized, I'd like to congratulate you for
                            finding it!
                            My name is Enoch and welcome to a small website I made from scratch as a side project to
                            familiarize myself with the Vue.js framework.
                            With a passion to change the world through programming and design, I am
                            currently studying Systems Design Engineering at the University of Waterloo as an
                            undergraduate
                            student. I always enjoy learning new skills, trying out different foods, and picking up new
                            hobbies.
                            Today, I am a software developer at a start-up called Terrene Inc. which aims to
                            simplify big data through
                            the use of neutral networks to produce predictive analysis. You could find more information
                            about my past work experience and side projects on the next page. </p></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="tiny-gap"></div>
        <div class="tiny-gap"></div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import FooterNav from './footer.vue'

  export default {
    name: "aboutme",
    components: {
      FooterNav: FooterNav
    }

  }
</script>

<style scoped>
    .fact-card {
        margin: auto;
        width: 50%;
        padding-top: 50px;
    }

    .content-title {
        text-align: center;
        font-size: 250%;
    }

    .content-content {
        text-align: center;
        font-size: 160%;
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 140%;

    }

    .wrapper {
        width: 75%;
        margin: auto;
    }

    #overview {
        margin: auto;
        width: 65%;
    }

    .overview-content {
        font-size: 135%;
        font-weight: 300;
        color: #212121;
        line-height: 150%;
    }

</style>
