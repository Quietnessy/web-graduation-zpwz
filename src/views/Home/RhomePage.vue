// 招聘者的首页
<template>
  <div class="rhomepage-container">
    <div class="btn-release" @click="ReleasePos">
      发布职位
    </div>
    <div class="position-list-container">
      <div class="position-item">
        <p style="font-size: 18px; color:#62D5C8;">前端开发实习生</p>
        <p style="font-size: 14px; color:#9FA3B0;margin-top: 15px"> <span style="margin-left: 0px">北京</span>  <span>4天/周</span> <span>3个月</span> <span>本科</span>  <span>200-260元／天</span> </p>
        <p class="see-detail">查看详情>></p>
      </div>
      <div class="position-item">
        <p style="font-size: 18px; color:#62D5C8;">前端开发实习生</p>
        <p style="font-size: 14px; color:#9FA3B0;margin-top: 15px"> <span style="margin-left: 0px">北京</span>  <span>4天/周</span> <span>3个月</span> <span>本科</span>  <span>200-260元／天</span> </p>
        <p class="see-detail">查看详情>></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 点击发布职位按钮
    ReleasePos () {
      this.$router.push('/releaseposition')
    }
  }
}
</script>

<style lang="stylus" scoped>
.rhomepage-container
  height calc(100vh-50px)
  width 80%
  padding-top 50px
  margin 0 auto
  .btn-release
    width 100px
    height 34px
    line-height 34px
    text-align center
    color #fff
    fint-size 14px
    background-color #62D5C8
    cursor pointer
  .position-list-container
    height 1000px
    margin-top 50px
    .position-item
      margin-bottom 20px
      cursor pointer
      width 100%
      height 118px
      background-color #fff
      padding 20px 30px
      span
        margin-left 10px
      &:hover
        .see-detail
          transition all ease 1s
          color #62D5C8
        box-shadow 0 2px 2px rgba(10, 16, 20, 0.24)
        transition all ease 1s
      .see-detail
        float right
        margin-top -30px
        margin-right 200px
</style>