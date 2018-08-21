<template>
    <div class="content-1">
        <img :src="writeImgUrl" alt="">
    </div>
</template>
<script>
import writeImgUrl from '../../assets/contentImg/write.jpg'
export default {
  data () {
    return {
      writeImgUrl: writeImgUrl
    }
  }
}
</script>

<style>
.content-1 {
    overflow: hidden;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
    float: left;
    width: 300px;
    height: 400px;
    background-color: #fff;
}
.content-1 img {
    width: 300px;
    height: 400px;
}
</style>
