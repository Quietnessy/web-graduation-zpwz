<template>
  <div class="job-container">
    <div class="job-header">
      <div class="job-container-search">
        <Input v-model="value13" class="search-input" size="large" style="padding-left: 50px">
          <Button slot="append" icon="ios-search" class="search-btn"></Button>
        </Input>
      </div>
      <!-- 筛选求职条件 -->
      <div class="select-container">
        <!-- 工作经验要求 -->
        <Dropdown @on-click="selectWorkMenuItem">
          <div class="select-header-container">
            {{ curWorkexperience || '工作经验' }}
            <Icon type="ios-arrow-dropdown"/>
          </div>
          <DropdownMenu slot="list" style="width: 150px">
            <DropdownItem name="不限">不限</DropdownItem>
            <DropdownItem name="应届生">应届生</DropdownItem>
            <DropdownItem name="在校生">在校生</DropdownItem>
            <DropdownItem name="1年以内">1年以内</DropdownItem>
            <DropdownItem name="1-3年">1-3年</DropdownItem>
            <DropdownItem name="3-5年">3-5年</DropdownItem>
            <DropdownItem name="5-10年">5-10年</DropdownItem>
            <DropdownItem name="10年以上">10年以上</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- 学历要求 -->
        <Dropdown @on-click="selectEducationMenuItem">
          <div class="select-header-container">
            {{ curEducation || '学历要求' }}
            <Icon type="ios-arrow-dropdown"/>
          </div>
          <DropdownMenu slot="list" style="width: 150px">
            <DropdownItem name="不限">不限</DropdownItem>
            <DropdownItem name="初中及以下">初中及以下</DropdownItem>
            <DropdownItem name="中专/中技">中专/中技</DropdownItem>
            <DropdownItem name="高中以内">高中以内</DropdownItem>
            <DropdownItem name="大专">大专</DropdownItem>
            <DropdownItem name="本科">本科</DropdownItem>
            <DropdownItem name="硕士">硕士</DropdownItem>
            <DropdownItem name="博士以上">博士以上</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!--薪资要求 -->
        <Dropdown @on-click="selectSalaryMenuItem">
          <div class="select-header-container">
            {{ curSalary || '薪资要求' }}
            <Icon type="ios-arrow-dropdown"/>
          </div>
          <DropdownMenu slot="list" style="width: 150px">
            <DropdownItem name="不限">不限</DropdownItem>
            <DropdownItem name="3K以下">3K以下</DropdownItem>
            <DropdownItem name="3-5K">3-5K</DropdownItem>
            <DropdownItem name="5-10K">5-10K</DropdownItem>
            <DropdownItem name="10-15K">10-15K</DropdownItem>
            <DropdownItem name="15-20K">15-20K</DropdownItem>
            <DropdownItem name="20-30K">20-30K</DropdownItem>
            <DropdownItem name="30-50K">30-50K</DropdownItem>
            <DropdownItem name="50K以上">50K以上</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- 融资阶段 -->
        <Dropdown @on-click="selectFinancingMenuItem">
          <div class="select-header-container">
            {{ curFinancing || '融资阶段' }}
            <Icon type="ios-arrow-dropdown"/>
          </div>
          <DropdownMenu slot="list" style="width: 150px">
            <DropdownItem name="不限">不限</DropdownItem>
            <DropdownItem name="未融资">未融资</DropdownItem>
            <DropdownItem name="天使轮">天使轮</DropdownItem>
            <DropdownItem name="A轮">A轮</DropdownItem>
            <DropdownItem name="B轮">B轮</DropdownItem>
            <DropdownItem name="C轮">C轮</DropdownItem>
            <DropdownItem name="D轮及以上">D轮及以上</DropdownItem>
            <DropdownItem name="已上市">已上市</DropdownItem>
            <DropdownItem name="不需要融资">不需要融资</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!-- 公司规模 -->
        <Dropdown @on-click="selectScaleMenuItem">
          <div class="select-header-container">
            {{ curScale || '公司规模' }}
            <Icon type="ios-arrow-dropdown"/>
          </div>
          <DropdownMenu slot="list" style="width: 150px;">
            <DropdownItem name="不限">不限</DropdownItem>
            <DropdownItem name="0-20人">0-20人</DropdownItem>
            <DropdownItem name="20-99人">20-99人</DropdownItem>
            <DropdownItem name="100-499人">100-499人</DropdownItem>
            <DropdownItem name="500-999人">500-999人</DropdownItem>
            <DropdownItem name="1000-9999人">1000-9999人</DropdownItem>
            <DropdownItem name="10000人以上">10000人以上</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <!-- 岗位列表项 -->
    <div class="job-list-container"> 
      <div class="job-primary" @click="gotoDetails">
        <div class="info-primary">
          <div class="info-left">
            <p>中后台产品经理（数据平台）[北京·海淀区·上地]</p>
            <div style="font-size: 13px"><span style="color: #fc703e; margin-right: 20px">30-60K·16薪</span>3-5 年 | 本科 张女士 | HR</div>
          </div>
          <div class="info-right">
            <p class="comname">Boss</p>
            <p style="font-size: 13px">社交网络 | 已上市 | 10000人以上</p>
            <img src="https://img.bosszhipin.com/beijin/mcs/banner/3e9d37e9effaa2b6daf43f3f03f7cb15cfcd208495d565ef66e7dff9f98764da.jpg" alt="快手">
          </div>
          <div style="clear: both;"></div>
        </div>
        <div class="info-append">
          <div class="func-container">
            <div class="fun-item">产品设计</div>
            <div class="fun-item">后台产品</div>
            <div class="fun-item">商业产品</div>
            <div class="fun-item">数据分析</div>
          </div>
          <p class="welfare">年终奖，定期体检，带薪年假，加班补助，包吃，股票期权</p>
          <div style="clear: both;"></div>
        </div>
      </div>
      <div class="job-primary" @click="gotoDetails">
        <div class="info-primary">
          <div class="info-left">
            <p>中后台产品经理（数据平台）[北京·海淀区·上地]</p>
            <div style="font-size: 13px"><span style="color: #fc703e; margin-right: 20px">30-60K·16薪</span>3-5 年 | 本科 张女士 | HR</div>
          </div>
          <div class="info-right">
            <p class="comname">字节跳动</p>
            <p style="font-size: 13px">社交网络 | 已上市 | 10000人以上</p>
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg" alt="快手">
          </div>
          <div style="clear: both;"></div>
        </div>
        <div class="info-append">
          <div class="func-container">
            <div class="fun-item">产品设计</div>
            <div class="fun-item">后台产品</div>
            <div class="fun-item">商业产品</div>
            <div class="fun-item">数据分析</div>
          </div>
          <p class="welfare">年终奖，定期体检，带薪年假，加班补助，包吃，股票期权</p>
          <div style="clear: both;"></div>
        </div>
      </div>
      <div class="job-primary" @click="gotoDetails">
        <div class="info-primary">
          <div class="info-left">
            <p>中后台产品经理（数据平台）[北京·海淀区·上地]</p>
            <div style="font-size: 13px"><span style="color: #fc703e; margin-right: 20px">30-60K·16薪</span>3-5 年 | 本科 张女士 | HR</div>
          </div>
          <div class="info-right">
            <p class="comname">网易</p>
            <p style="font-size: 13px">社交网络 | 已上市 | 10000人以上</p>
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20200424/a6b7e12e59c797fe3defd1ba6b163db0fd17edca5c902374e3c4007d899331b4_s.jpg" alt="快手">
          </div>
          <div style="clear: both;"></div>
        </div>
        <div class="info-append">
          <div class="func-container">
            <div class="fun-item">产品设计</div>
            <div class="fun-item">后台产品</div>
            <div class="fun-item">商业产品</div>
            <div class="fun-item">数据分析</div>
          </div>
          <p class="welfare">年终奖，定期体检，带薪年假，加班补助，包吃，股票期权</p>
          <div style="clear: both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.value13 = this.$store.state.searchKeys
  },
  data () {
    return {
      curWorkexperience: '',
      curEducation: '',
      curSalary: '',
      curFinancing: '',
      curScale: '',
      value13: ''
    }
  },
  methods: {
    // 处理下拉框的点击事件
    selectWorkMenuItem (curValue) {
      this.curWorkexperience = curValue
    },
    // 点击学历下拉框
    selectEducationMenuItem (curValue) {
      this.curEducation = curValue
    },
    selectSalaryMenuItem (curValue) {
      this.curSalary = curValue
    },
    selectFinancingMenuItem (curValue) {
      this.curFinancing = curValue
    },
    selectScaleMenuItem (curValue) {
      this.curScale = curValue
    },
    gotoDetails () {
      this.$router.push('/postiondetails')
    }
  }
}
</script>

<style lang="stylus" scoped>
.job-container
  font-size 10px
  .job-header
    height 200px
    .job-container-search
      .search-input
        width 60%
        height 100%
        margin 20px auto
        margin-top 50px
        .search-btn
          width 100px
          height 140%
          color #fff
          border none
          background-color #5dd5c8
          border-radius 0
          border none
          outline none
    .select-container
      border 1px solid #ccc
      text-align center
      width 70%
      margin 0 auto
      font-size 13px
      .select-header-container
        cursor pointer
        width 150px
        text-align center
        line-height 40px
        height 40px
  .job-list-container
    width 70%
    margin 0 auto
    height 1000px
    .job-primary
      font-size 14px
      .info-primary
        cursor pointer
        border-radius 10px
        height 100px
        padding 30px 30px 0 30px
        background-color #fff
        .info-left
          float left
          p
            color #00c2b3
            font-size 15px
            margin-bottom 10px
        .info-right
          float right
          margin-right 200px
          .comname
            color #00c2b3
            font-size 15px
            margin-bottom 10px
          img
            float right
            margin-right -120px
            margin-top -54px
            width 56px
            height 56px
      .info-append
        margin-bottom 20px
        cursor pointer
        .func-container
          float left
          margin-top 20px
          margin-left 20px
          .fun-item
            height 30px
            line-height 30px
            width 80px
            float left
            text-align center
            margin-right 20px
            border 1px solid #ccc
            border-radius 3px
        .welfare
          float right
          margin-right 50px
          margin-top 20px
</style>