<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <img src="/pictures/title.jpg">
                <ul class="fly-in-text hidden">
                    <li>E</li>
                    <li>N</li>
                    <li>O</li>
                    <li>C</li>
                    <li>H</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import FooterNav from './footer.vue'

  export default {
    data() {
      return {
        name: 'home'
      }
    },
    mounted() {
      setTimeout(function () {
        $('.fly-in-text').removeClass('hidden');
      }, 500);
    },
    components: {
      FooterNav: FooterNav
    },
  }
</script>

<style scoped>
    img {
        background-image: url("/pictures/title.jpg");
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        filter: brightness(90%);

    }

    .fly-in-text {
        list-style: none;
        position: absolute;
        text-align: center;
        top: 50%;
        width: 100%;
        margin: auto;
    }

    .fly-in-text li {
        display: inline-block;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        font-size: 600%;
        margin-right: 70px;
        opacity: 1;
        transition: all 2.5s ease;
    }

    .fly-in-text.hidden li {
        opacity: 0;
    }

    .fly-in-text.hidden li:nth-child(1) {
        transform: translateX(-250px) translateY(-200px);
    }

    .fly-in-text.hidden li:nth-child(2) {
        transform: translateX(20px) translateY(100px);
    }

    .fly-in-text.hidden li:nth-child(3) {
        transform: translateX(-150px) translateY(220px);
    }

    .fly-in-text.hidden li:nth-child(4) {
        transform: translateX(10px) translateY(-200px);
    }

    .fly-in-text.hidden li:nth-child(5) {
        transform: translateX(250px) translateY(200px);
    }

    .large-gap {
        width: 100%;
        height: 927px;
    }
</style>
