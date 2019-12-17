<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件 -->
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.item-title-icon {
  position: relative;
  left: .06rem;
  top: .06rem;
  display: inline-block;
  width: .36rem;
  height: .36rem;
  margin-right: .1rem;
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  background-size: .4rem 3rem;
}
.item-title {
  line-height: .8rem;
  padding: 0 .2rem;
  font-size: .32rem;
}
.item-children {
  padding-left: .2rem;
}
</style>
