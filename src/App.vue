<template>
  <div class="full-width">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopNav from './top.vue'

  export default {
    components: {
      TopNav: TopNav
    },
    data() {
      return {}
    }
  }
</script>


