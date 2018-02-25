<template>
    <footer class="page-footer">
        <div class="container" id="top-content">
            <div class="row">
                <h5 class="white-text" id="header">Find out more by connecting with me on social media</h5>
                <div class="icon-container">
                    <a href="https://www.facebook.com/enoch.tang.5"><img src="/pictures/facebook-icon.png"
                                                                         class="icon-size" id="icon1"></a>
                    <a href="https://www.instagram.com/enoch_tangg/"><img src="/pictures/instagram-icon.png"
                                                                          class="icon-size" id="icon2"></a>
                    <a href="https://www.linkedin.com/in/enoch-tang-a132a8153/"><img src="/pictures/linkedin-icon.png"
                                                                                     class="icon-size" id="icon3"></a>
                    <a href="https://github.com/enochtangg"> <img src="/pictures/github-icon.png" class="icon-size"
                                                                  id="icon4"></a>
                    <a href="/pictures/resume-file.pdf" download><img src="/pictures/resume-icon.png" class="icon-size"
                                                                      id="icon5"></a>
                    <a href="mailto:enoch.tang@hotmail.com"><img src="/pictures/mail-icon.png" class="icon-size"
                                                                 id="icon6"></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container" id="bottom-content">
                © 2018 Enoch Tang. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style scoped>
    #top-content {
        text-align: center;
    }

    #header {
        font-size: 250%;
    }

    .icon-container {
        width: 100%;
        marign: auto;
        padding-top: 30px;
    }

    #icon1:hover {
        opacity: 0.3;
    }

    #icon2:hover {
        opacity: 0.3;
    }

    #icon3:hover {
        opacity: 0.3;
    }

    #icon4:hover {
        opacity: 0.3;
    }

    #icon5:hover {
        opacity: 0.3;
    }

    #icon6:hover {
        opacity: 0.3;
    }

    .icon-size {
        width: 32px;
        height: 32px;
        margin-right: 15px;
    }

    #bottom-content {
        padding-top: 10px;
        text-align: center;
    }
</style>