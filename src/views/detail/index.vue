<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="galleryImgs"
    >
    </detail-banner>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/mock/detail.json', {
      // axios.get('/api/detail.json', {
        params: { id: this.$route.params.id }
      }).then(result => {
        result = result.data
        if (result.success && result.data) {
          const data = result.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.galleryImgs = data.galleryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 50rem;
}
</style>
