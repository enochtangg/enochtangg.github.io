<template>
    <div>
        <div class="md-layout">
            <md-content class="md-primary" id="header">
                <div class="header-container">
                    <h1>Experiences and Projects</h1>
                    <p class="subheading">A portfolio of the work I have contributed to in order to grow as a
                        developer</p>
                </div>
            </md-content>

            <div class="fact-card">
                <h2 class="content-title">Striving to be a better developer day by day</h2>
                <p class="content-content">I was never programming prodigy, nor was I a programming enthusiast in
                    high school. However, I later realized sheer importance of programming and how it is revolutionizing
                    our world today. We can accomplish so much more than the human brain by
                    utilizing computer programming. Therefore, I started to build a passion towards
                    software development and problem solving.
                    Below you can find some of my past work experiences and side projects.</p>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import FooterNav from './footer.vue'

  export default {
    name: "visualize",
    components: {
      FooterNav: FooterNav
    }
  }
</script>

<style scoped>
    .fact-card {
        margin: auto;
        width: 55%;
        padding-top: 50px;
        animation: enlarge 1s;
    }

    .content-title {
        text-align: center;
        font-size: 250%;
        overflow: hidden;
        border-right: .1em solid black;
        white-space: nowrap;
        margin: 0 auto;
        animation: typing 3s steps(40, end),
        blink-caret .75s step-end infinite;
    }

    .content-content {
        text-align: center;
        font-size: 160%;
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 140%;
    }

    /* The typing effect */
    @keyframes typing {
        from {
            width: 0
        }
        to {
            width: 100%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: black;
        }
    }
</style>
