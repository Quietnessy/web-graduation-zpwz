<template>
  <div class="home-container">
    <div class="home-header-container">
      <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg.png" class="icon-tip">
      <img src="https://static.zhipin.com/v2/web/geek/images/fast-reg-text.png" class="icon-tip2">
    </div>
    <div class="home-main-container">
      <Input v-model="value13" class="search-input" size="large" style="padding-left: 50px">
        <!-- <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">Day</Option>
            <Option value="month">Month</Option>
        </Select> -->
        <Button slot="append" icon="ios-search" class="search-btn" @click="handleSearch"></Button>
      </Input>
      <!-- 左侧职位分类卡片 -->
      <Card :bordered="false" class="left-card">
        <p slot="title" class="left-card-title">职位分类</p>
        <div class="card-item">互联网技术 / 运营 / 产品</div>
        <div class="card-item">设计 / 销售 / 房地产</div>
        <div class="card-item">人力 / 法律 / 医生</div>
        <div class="card-item">互联网技术 / 运营 / 产品</div>
        <div class="card-item">设计 / 销售 / 房地产</div>
        <div class="card-item">人力 / 法律 / 医生</div>
      </Card>
      <!-- 轮播图 -->
      <Carousel autoplay v-model="value2" loop  class="car-container">
        <CarouselItem>
          <img src="https://static.zhipin.com/zhipin-geek/v399/web/geek/images/school/banner/wuhan.png" alt="轮播图" class="car-item">
        </CarouselItem>
        <CarouselItem>
          <img src="https://static.zhipin.com/zhipin-geek/v399/web/geek/images/school/banner/yangshi.png" alt="轮播图" class="car-item">
        </CarouselItem>
        <CarouselItem>
          <img src="https://static.zhipin.com/zhipin-geek/v399/web/geek/images/school/banner/chunzhao.png" alt="轮播图" class="car-item">
        </CarouselItem>
        <CarouselItem>
          <img src="https://static.zhipin.com/zhipin-geek/v399/web/geek/images/school/banner/jiaoyubu.png" alt="轮播图" class="car-item">
        </CarouselItem>
      </Carousel>
    </div>
    <div class="home-footer-container"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 0
    }
  },
  methods: {
    handleSearch () {
      this.$router.push({
        name: '职位',
        params: { id: '12121' }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-container
  .home-header-container
    height 120px
    width 100%
    padding 0 10%
    background-color #5dd5c8
    .icon-tip
      height 100%
    .icon-tip2
      height 26px
      position absolute
      right 25%
      top 12%
  .home-main-container
    position relative
    height 1000px
    width 77%
    margin 0 auto
    .search-input
      width 60%
      margin 50px auto
      .search-btn
        width 100px
        height 140%
        color #fff
        border none
        background-color #5dd5c8
    .left-card
      width 25%
      height 340px
      text-align center
      .left-card-title
        font-size 20px
        letter-spacing 5px
        font-weight bold
        height 20px
      .card-item
        text-align left
        padding-left 7%
        margin-bottom 20px
        font-weight bold
      .card-item:hover
        cursor pointer
    .car-container
      position absolute
      right -20px
      top 9%
      width 880px
      height 340px
      .car-item
        width 880px
</style>