<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';

.header-abs {
  position: absolute;
  z-index: 2;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: .4rem;
  text-align: center;
  background: rgba(0, 0, 0, .8);
  .header-abs-back {
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed {
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  background: $bg-color;
  color: #fff;
  font-size: .32rem;
  .header-fixed-back {
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
