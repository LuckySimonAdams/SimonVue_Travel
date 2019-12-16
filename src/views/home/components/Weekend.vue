<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  /* data () {
    return {
      list: [
        {
          id: '001',
          title: '主题',
          desc: '可视对讲付款可视对士大夫撒地方士大夫撒旦阿斯蒂芬讲弗兰克斯打击飞时代峻峰肯定睡觉',
          imgUrl: require('~images/swipers/swiper01.jpg')
        },
        {
          id: '002',
          title: '主题',
          desc: '可视对讲付款可视对讲弗兰克斯打击飞时代峻峰肯定睡觉',
          imgUrl: require('~images/swipers/swiper01.jpg')
        },
        {
          id: '003',
          title: '主题',
          desc: '可视对讲付款可视对讲弗兰克斯打击飞时代峻峰肯定睡觉',
          imgUrl: require('~images/swipers/swiper01.jpg')
        }
      ]
    }
  } */
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';

.title {
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
.item {
  padding-bottom: .1rem;
}
.item-img.wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
}
.item-img {
  width: 100%;
}
.item-info {
  padding: .1rem;
  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    @include ellipsis;
  }
  .item-desc {
    line-height: .4rem;
    color: #ccc;
    @include ellipsis;
  }
}
</style>
