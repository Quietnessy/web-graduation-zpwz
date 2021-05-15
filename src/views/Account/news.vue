<template>
  <div>
    <div class="news-container">
      <div class="left-container">
        <h3>联系人列表</h3>
        <div class="left-item">
          <img
            src="https://img.bosszhipin.com/boss/avatar/avatar_12.png"
            style="width: 46px;border-radius: 100%;float: left;"
          >
          <p style="margin-left: 20%;color:#414a60;font-size: 14px;padding-top:5px">郭麒麟 <span style="float: right;color:#9fa3b0;">04月30日</span></p>
          <p style="margin-left: 20%;font-size: 12px;color: #9fa3b0;">阿里巴巴 | 前端开发</p>
        </div>
        <div class="left-item">2</div>
        <div class="left-item">3</div>
        <div class="left-item">4</div>
      </div>
      <div class="right-container">
        <div class="chant-title">沟通职位前端工程师 4-9K 杭州</div>
        <div class="chat-container"></div>
        <div></div>
      </div>
      <div style="clear:both;"></div>
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
    
  }
}
</script>
<style lang="stylus" scoped>
  .news-container
    height calc(100vh - 50px)
    width 80%
    margin 0 auto
    background-color #fff
    .left-container
      float left
      width 30%
      height 100%
      border-right 2px solid #f6f6f8
      .left-item
        height 76px
        padding 10px 30px
        cursor pointer
        &:hover
          background-color #f3f5fa
    .right-container
      float right
      width 69%
      background-color #31c27c
    h3
      width 100%
      height 50px
      line-height 50px
      font-weight 600
      text-align center
      letter-spacing 3px
      border-bottom 2px solid #f6f6f8
</style>