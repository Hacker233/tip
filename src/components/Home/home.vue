<template>
    <div class="home-wwrapper">
        <Header></Header>
        <div class="home-content"></div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from '../luHeader.vue'
import Footer from '../luFooter.vue'
export default {
  data () {
    return {}
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
.home-content {
  width: 750px;
}
.home-content img {
  width: 750px;
  height: 700px;
}
</style>
