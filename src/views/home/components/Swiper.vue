<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 800,
        direction: 'horizontal',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  // 样式穿透
  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%; // 通过图片高与宽的像素比计算得出
  background: #eee;
  .swiper-img {
    width: 100%
  }
}
</style>
