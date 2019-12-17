<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';

.title {
  margin-top: .2rem;
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  .item-img {
    width: 1.5rem;
    height: 1.5rem;
    padding: .2rem;
  }
  .item-info {
    flex: 1;
    min-width: 0; /* 避免字体省略失效 */
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
    .item-button {
      line-height: .44rem;
      margin-top: .1rem;
      padding: 0 .2rem;
      border-radius: .06rem;
      background: #ff9300;
      color: #fff;
      font-size: .12rem;
    }
  }
}
</style>
