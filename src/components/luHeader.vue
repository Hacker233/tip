<template>
    <div class="header-wrapper">
        <p>用心创作</p>
    </div>
</template>
<script>
export default {
  data () {}
}
</script>

<style>

.header-wrapper {
    width: 100%;
    height: 100px;
    background-color: rgba(61, 89, 180,0.5);
    text-align: center;
    box-sizing: border-box;
    position: fixed;
    left: 0px;
    z-index: 105;
    top: 0px;
}
.header-wrapper p {
    line-height: 100px;
    letter-spacing: 30px;
    font-size: 50px;
    font-weight: 600;
    color: rgba(248, 248, 248, 0.9);
    font-family: cursive;
}
</style>
