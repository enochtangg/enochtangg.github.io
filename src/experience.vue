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

            <div class="tiny-gap"></div>

            <div class="fact-card">
                <h2 class="content-title">Striving to be a better developer day by day</h2>
                <p class="content-content">I was never programming prodigy, nor was I a programming enthusiast in
                    high school. However, I later realized sheer importance of programming and how it is revolutionizing
                    our world today. We can accomplish so much more than the human brain by
                    utilizing computer programming. Therefore, I started to build a passion towards
                    software development and problem solving.
                    Below you can find some of my past work experiences and side projects.</p>
            </div>
            <div class="large-gap"></div>
            <div class="experiences">
                <div class="terrene">
                    <div class="left-content">
                        <h2 class="experiences-header">Terrene Inc.</h2>
                        <ul class="experiences-content">
                            <p><b>Software Developer</b> @ <b>Terrene</b> from <b>Jan 2018 - Apr 2018</b></p>
                            <p>Terrene is a predictive analytics engine that provide businesses the ability to train
                                machine
                                learning model on their data with a press of a button. Through this software, businesses
                                can
                                see insights, visualize the predictions, and start improving the
                                efficiency of their business. </p>
                            <p><b>What were some of my contributions?</b></p>
                            <li>&bull; Architected and developed the entire metadata extraction/aggregation process
                                which
                                feeds
                                Terrene certain metadata about a client's model and ultimately optimizes model quality.
                            </li>
                            <li>&bull; Optimized the neural network model training by dynamically adjusting
                                hidden layers with respect to the loss after each epoch which significantly reduced
                                overfitting and improved overall accuracy
                            </li>
                            <li>&bull; Implemented and updated key features to Terrene's Python SDK according to the new
                                changes made on version 2.0 of our backend/REST API
                            </li>
                            <li>&bull; Developed the frontend UI and functionality for clientele portal using the Vue.js
                                framework
                            </li>
                            <p><b>Technologies:</b> Full-Stack Development, Python, Django, Vue.js, Postgres, Pandas,
                                Machine Learning, Keras, SciKit, Docker, AWS, Jinja </p>
                        </ul>
                    </div>
                    <div class="right-content">
                        <img src="/pictures/terrene-logo.png" class="logo-picture hidden">
                    </div>
                </div>
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
    },
    mounted() {
      $(document).on('scroll', function () {
        if ($(this).scrollTop() >= $('.terrene').position().top) {
          $('.logo-picture').removeClass('hidden');
          $('.logo-picture').addClass('animate');
        }
      })
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
        float: left;
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

    .experiences {
        width: 100%;
        background-color: #ecf0f1;
    }

    .terrene {
        padding-top: 80px;
    }

    .left-content {
        float: left;
        width: 50%;
        padding-left: 5%;
    }

    .experiences-header {
        font-size: 360%;
    }

    .experiences-content {
        font-size: 130%;
        font-weight: 300;
        letter-spacing: 2px;
        line-height: 110%;
    }

    li {
        padding-bottom: 15px;
    }

    .right-content {
        float: left;
        width: 50%;
    }

    .logo-picture {
        display: block;
        margin: 170px auto;
        vertical-align: middle;
        transform: scale(0)
    }

    .logo-picture.hidden {
        opacity: 0;
    }

    .logo-picture.animate {
        transition: 1s;
        transform: scale(1)
    }

</style>
