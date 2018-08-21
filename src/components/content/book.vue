<template>
    <div class="content-3">
        <img :src="bookImgUrl" alt="">
    </div>
</template>
<script>
import bookImgUrl from '../../assets/contentImg/book.jpg'

export default {
  data () {
    return {
      bookImgUrl: bookImgUrl
    }
  }
}
</script>

<style>
.content-3 {
    float: left;
    margin-left: 50px;
    margin-right: 50px;
    width: 300px;
    height: 400px;
    background-color: #fff;
}
.content-3 img {
    width: 300px;
    height: 400px;
}
</style>
