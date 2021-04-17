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
      <!-- 职位推荐 -->
      <div class="position-recommend-container">
        <div class="box-title">
          职位推荐
        </div>
        <div class="box-card-container">
          <ul>
            <li class="li-container-recommend">
              <div style="margin-bottom: 10px">
                <p style="font-size: 15px" class="position-name">前端开发实习生 <span style="color: #FD7240;margin-left: 40%">180-250元/天</span></p>
                <p style="color: #8D92A1; margin-top: 10px">3个月 | 本科</p>
              </div>
              <div style="border-top: 1px solid #eef0f5;padding: 10px 0;">
                <img
                src="https://img.bosszhipin.com/beijin/mcs/bar/20191211/fdcbb429c600fd69240b0baa0ae57e8ebe1bd4a3bd2a63f070bdbdada9aad826.jpg" 
                alt="公司logo"
                style="width: 30px;float: left;border: 1px solid #f3f5fb;border-radius: 3px">
                <p style="float: left;margin-top: 5px;margin-left: 8px;font-size: 13px">亲宝宝</p>
                <p style="margin-top: 5px;margin-right: 15px;float: right;font-size: 13px"><Icon type="ios-pin-outline" style="margin-right: 8px"/>西湖区.黄龙</p>
              </div>
            </li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <div class="clearfix"></div>
          </ul>
        </div>
      </div>
      <!-- 热招职位 -->
      <div class="position-recommend-container">
        <div class="box-title">
          热招职位
        </div>
        <div class="box-card-container">
          <ul>
            <li class="li-container-recommend">
              <div style="margin-bottom: 10px">
                <p style="font-size: 15px" class="position-name">图像算法工程师 <span style="color: #FD7240;margin-left: 40%">25-50k.14薪</span></p>
                <p style="color: #8D92A1; margin-top: 10px">3-5年 | 本科</p>
              </div>
              <div style="border-top: 1px solid #eef0f5;padding: 10px 0;">
                <img
                src="https://img.bosszhipin.com/beijin/upload/com/logo/20210223/a41aa597f4d51f86b823ab1d53f4946a3dab54ce424d4e9638b222b76540f90d.jpg" 
                alt="公司logo"
                style="width: 30px;float: left;border: 1px solid #f3f5fb;border-radius: 3px">
                <p style="float: left;margin-top: 5px;margin-left: 8px;font-size: 13px">京东健康 | 电子商务 | 已经上市</p>
                <!-- <p style="margin-top: 5px;margin-right: 15px;float: right;font-size: 13px"><Icon type="ios-pin-outline" style="margin-right: 8px"/>西湖区.黄龙</p> -->
              </div>
            </li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <li class="li-container-recommend">1234</li>
            <div class="clearfix"></div>
          </ul>
        </div>
      </div>
      <!-- 热门企业 -->
      <div class="position-recommend-container">
        <div class="box-title">职位推荐</div>
        <div class="box-car-container">
          <ul>
            <li class="li-container-hot">
              <img
                src="https://img.bosszhipin.com/beijin/mcs/bar/20190702/6261090e70ee610815076fbaddae1a74be1bd4a3bd2a63f070bdbdada9aad826.jpg"
                alt=""
                style="width: 60px; border-radius: 4px; margin: 3px auto;display: block">
              <h4 
                style="margin-bottom: 10px;
                margin-top: 10px;
                height: 22px;
                line-height: 22px;
                font-size: 16px;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;" class="name-hello">叮当快药</h4>
              <div
                style="height: 18px;
                  line-height: 18px;
                  color: #898e9d;
                  font-size: 12px;
                  white-space: nowrap;
                  margin-top: 10px;
                  margin-bottom: 10px;"
                  >
                    C轮 | 互联网
              </div>
              <div style="width: 180px;height: 33px;line-height: 33px;border: 1px solid #e3e7ed;font-size: 12px;color: #61687c;:hover: border-color #5dd5c8;" class="nimof-position">
                <span style="color: #00C2B3">205</span>个热招职位
              </div>
            </li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <li class="li-container-hot">1234</li>
            <div class="clearfix"></div>
          </ul>
        </div>
      </div>
    </div>
    <div class="home-footer-container">
    </div>
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
    height 3000px
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
      width 23%
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
      right 0px
      top 3%
      width 880px
      height 340px
      padding-left 10px
      .car-item
        width 880px
    .position-recommend-container
      margin-top 37px
      .box-title
        width 100%
        height 40px
        line-height 40px
        text-align center
        font-size 24px
        letter-spacing 3px
        margin-bottom 15px
      .box-card-container
        width 100%
        .clearfix
          clear both
        .li-container-recommend
          width 380px
          height 130px
          background-color #fff
          padding 16px 20px
          float left
          list-style none
          margin-right 1.2%
          margin-bottom 1.2%
          &:nth-child(3n)
            margin-right 0
          &:hover
            transition all ease 0.1s
            box-shadow 0px 3px 3px #c8c8c8
            cursor pointer
            transform scale(1.02); 
            .position-name
              color #00d7c6
      .box-car-container
        width 100%
        .clearfix
          clear both
        .li-container-hot
          text-align center
          width 280px
          height 238px
          padding 50px
          background-color #fff
          float left
          list-style none
          margin-right 1.2%
          margin-bottom 1.2%
          &:nth-child(4n)
            margin-right 0
          &:hover
            transition all ease 0.3s
            box-shadow 0px 2px 2px #c8c8c8
            cursor pointer
            .name-hello
              color #00d7c6
</style>