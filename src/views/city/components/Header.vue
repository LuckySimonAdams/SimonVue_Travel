<template>
  <div class="header">
    选择城市
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';

.header {
  position: relative;
  overflow: hidden;
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  font-size: .32rem;
  background: $bg-color;
  color: #fff;
  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
