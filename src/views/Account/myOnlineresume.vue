<template>
  <div class="body-container">
    <div class="online_container">
      <div class="left-container">
        <h3 class="menu-header">附件简历</h3>
        <div class="menu-item" @click="goto('#info9')" style="border-bottom: 1px solid #f6f6f8;">添加附件简历</div>
        <h3 class="menu-header">在线简历</h3>
        <div class="menu-item" @click="gotoEditresume">编辑在线简历</div>
        <div class="menu-item" @click="goto('#info1')">个人信息</div>
        <div class="menu-item" @click="goto('#info2')">个人优势</div>
        <div class="menu-item" @click="goto('#info3')">期望职位</div>
        <div class="menu-item" @click="goto('#info4')">实习经历</div>
        <div class="menu-item" @click="goto('#info5')">项目经历</div>
        <div class="menu-item" @click="goto('#info6')">教育经历</div>
        <div class="menu-item" @click="goto('#info7')">资格证书</div>
        <div class="menu-item" @click="goto('#info8')">社交主页</div> 
      </div>
      <div class="right-container">
        <h3 class="right-header">我的附件简历</h3>
        <div id="info9" class="info-container">
          <h3 class="info-header">附件简历</h3>
          <Upload
            type="drag"
            :before-upload="beforeFileUpload"
            action="hello"
            v-if="fileName === ''">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #7dd2c8"></Icon>
              <p>点击或者拖拽文件到此进行上传</p>
            </div>
          </Upload>
          <div style="width: 100%;text-align: center;cursor:pointer;color: #7dd2c8; font-size: 16px">{{ fileName }}</div>

        </div>
        <h3 class="right-header">我的在线简历</h3>
        <div id="info1" class="info-container">
          <h3 class="info-header">个人信息</h3>
          <ul>
            <li>● 周杰伦</li>
            <li>● 21年应届生</li>
            <li>● 本科</li>
            <li>● 离校随时到岗</li>
            <li>● 18739673072</li>
          </ul>
        </div>
        <div id="info2" class="info-container">
          <h3 class="info-header">个人优势</h3>
          <ul>
            <li>● 熟练掌握H5、CSS3、Javascript、微信小程序等前端基础知识</li>
            <li>● 熟悉Less，Sass等CSS预处理器</li>
            <li>● 熟悉Jquery插件库，animate.css动画库</li>
            <li>● 熟练使用git等版本控制系统，熟悉其常用命令</li>
            <li>● 有基于 Vue+Elementui 技术栈的开发经验</li>
            <li>● 有自己的CSDN博客</li>
          </ul>
        </div>
        <div id="info3" class="info-container">
          <h3 class="info-header">期望职位</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
        <div id="info4" class="info-container">
          <h3 class="info-header">实习经历</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
        <div id="info5" class="info-container">
          <h3 class="info-header">项目经历</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
        <div id="info6" class="info-container">
          <h3 class="info-header">教育经历</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
        <div id="info7" class="info-container">
          <h3 class="info-header">资格证书</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
        <div id="info8" class="info-container">
          <h3 class="info-header">社交主页</h3>
          <ul>
            <li>● web前端</li>
            <li>● 工资面议</li>
            <li>● 移动互联网</li>
            <li>● 杭州</li>
            <li>● 双休</li>
            <li>● 福利好</li>
          </ul>
        </div>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileName: ''
    }
  },
  methods: {
    // 点击左侧菜单进行事件
    goto(curId) {
      document.querySelector(curId).scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.querySelectorAll('#info1,#info2,#info3,#info4,#info5,#info6,#info7,#info8,#info9').forEach(element => {
        element.style.border = 'none'
      });
      document.querySelector(curId).style.border = '0.3px dashed #7dd2c8';
      document.querySelector(curId).style.borderRadius="5px"
    },
    // 文件上传之前
    beforeFileUpload (fileInfo) {
      console.log(fileInfo)
      this.fileName = fileInfo.name
    },
    // 去编辑简历界面
    gotoEditresume () {
      this.$router.push('/editonlineresume')
    }
  }
}
</script>

<style lang="less" scoped>
.body-container{
  width: 100%;
  background-color: #f6f6f8;
}
.online_container {
  padding-top: 30px;
  width: 80%;
  margin: 0 auto;
  // height: 1000px;
  .left-container{
    position: fixed;
    float: left;
    width: 15%;
    height: 600px;
    background-color: #fff;
    .menu-header{
      width: 100%;
      padding: 30px;
      text-align: center;
      color: #414a60;
    }
    .menu-item {
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      letter-spacing: 1px;
    }
    .menu-item:hover {
      cursor: pointer;
      background-color: #f3f5f9;
      transition: all .15s linear;
    }
  }
  .right-container{
    float: right;
    width: 80%;
    left: 100px;
    // height: 800px;
    background-color: #fff;
    padding: 50px;
    .right-header{
      height: 60px;
      line-height: 60px;
      color: #414a60;
      font: 400;
      font-size: 20px;
      border-bottom: 1px solid #ccc;
    }
    .info-container{
      padding: 20px 0;
      // border: 1px solid #ccc;
      .info-header{
        width: 100%;
        padding-left: 10px;
        margin-bottom: 20px;
        border-left: 3px solid #53cac3;
      }
      ul{
        padding-left: 20px;
      }
      ul li{
        list-style: none;
      }
    }
  }
}
</style>