<template>
    <div>
        <div class="md-layout">
            <md-content class="md-primary" id="header">
                <div class="header-container">
                    <h1>My Passions and Personality</h1>
                    <p class="subheading">Discover who I am as a person aside from being a Systems Design Engineer</p>
                </div>
            </md-content>

            <div class="fact-card">
                <h2 class="content-title">A few fun facts about myself</h2>
                <p class="content-content">I love a genuine bowl of Vietnamese phở, I train Muay Thai like it's
                    a lifestyle, my favourite film series is Star Wars, I'm not a huge fan of listening to
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
                            <div class="md-title">Enoch Tang - Developer</div>
                        </md-card-header-text>
                    </md-card-header>
                    <md-card-media>
                        <img src="/pictures/enochtang.png">
                    </md-card-media>
                    <md-card-content>
                        <div><p class="overview-content">
                            Considering this website is not Search Engine Optimized, I'd like to congratulate you for
                            find
                            it!
                            My name is Enoch and welcome to a small website I made from scratch as a side project.
                            With a passion to change the world through programming and design, I am
                            currently studying Systems Design Engineering at the University of Waterloo as an
                            undergraduate
                            student. I always enjoy learning new skills, trying out different foods, and picking up new
                            hobbies.
                            Today, I am a software developer intern at a start-up called Terrene Inc. which aims to
                            simplify big data through
                            the use of neutral networks to produce predictive analysis. You could find more information
                            about my past work experience and side projects on the next page. </p></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
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

    #wrapper {
        width: 90%;
        margin: 0 auto;
    }

    h1 {
        font-size: 300%;
        font-weight: 500;
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
        width: 50%;
        padding-top: 50px;
        animation: enlarge 1s;
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
        width: 90%;
        margin: auto;
    }

    #overview {
        margin: auto;
        width: 80%;
        animation: enlarge 2s;
    }

    .overview-content {
        font-size: 135%;
        font-weight: 300;
        color: #212121;
        text-align: center;
        line-height: 150%;

    }

    @keyframes enlarge {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    .tiny-gap {
        width: 100%;
        height: 150px;
    }


</style>
