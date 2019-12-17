<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont header-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';

// 1rem = html.font-size = 50px
.header {
  display: flex;
  line-height: $header-height;
  background: $bg-color;
  color: #fff;
  .header-left {
    float: left;
    width: .64rem;
    .header-back {
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-left: .2rem;
    margin-top: .12rem;
    padding-left: .2rem;
    border-radius: .1rem;
    background: #fff;
    color: #ccc;
  }
  .header-right {
    float: right;
    min-width: 1.04rem;
    padding: 0 .1rem;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
