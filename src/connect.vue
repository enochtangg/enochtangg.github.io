<template>
    <div>
        <md-content class="md-primary" id="header">
            <div class="header-container">
                <h1>Connect with Me</h1>
                <p class="subheading"></p>
            </div>
        </md-content>
        <div class="md-layout" id="container">
        </div>
    </div>
</template>

<script>
  export default {
    name: "connect"
  }
</script>

<style scoped>
    .md-layout {
        width: 90%;
        margin: auto;
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
        font-size: 125%;
        color: #C1BFBF;
    }

</style>
