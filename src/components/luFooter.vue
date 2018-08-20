<template>
    <div class="foot-wrapper">
        <i class="iconfont">&#xe664;</i>
        <i class="iconfont">&#xe60e;</i>
        <i class="iconfont">&#xe68a;</i>
    </div>
</template>
<script>
export default {
  data () {}
}
</script>
<style>

.foot-wrapper .iconfont {
  font-family:"iconfont" !important;
  font-size: 60px;
  font-style: normal;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.foot-wrapper .iconfont:nth-child(2) {
    margin: 0px 190px 0 190px;
    font-size: 60px;
    display: inline-block;
    border: 3px #ffffff solid;
    height: 100px;
    line-height: 100px;
    width: 100px;
    border-radius: 100%;
}
.foot-wrapper {
    width: 750px;
    height: 130px;
    position: fixed;
    left: 0px;
    z-index: 105;
    bottom: 0px;
    background-color: rgba(27, 16, 90, 0.3);
    text-align: center;
    line-height: 130px;
}
</style>
