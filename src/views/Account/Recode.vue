<template>
  <div class="recode-container">
    <div class="recode-list-container">
      <h2 style="font-weight: 400; margin-left: 100px;padding-left: 1px;border-bottom: 1px solid #5dd5c8;padding-top: 50px;padding-bottom: 20px;margin-right: 120px">#投递记录</h2>
      <ul>
        <li class="recode-list-item">
          <div class="item-container">
            <img src="https://img.bosszhipin.com/boss/avatar/avatar_7.png" alt="招聘者头像" style="width: 42px;border-radius: 100%;float: left">
            <div class="info-right">
              <p style="margin-bottom: 10px">张海双 | 招聘者</p>
              <div class="info-details">
                <p style="color: #414a60;">前端实习生 - 有转正机会<span style="margin-left: 20px;color: #fc6c38;">400-450／天</span> <span style="float: right;padding-right: 50px">网易</span></p>
                <p style="margin-top: 13px;font-size: 12px;">杭州 滨江区 长河 在校/应届本科  <span style="float: right;padding-right: 50px">移动互联网 · 已上市 · 10000人以上</span></p>
                <img
                  src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20200424/a6b7e12e59c797fe3defd1ba6b163db0fd17edca5c902374e3c4007d899331b4_s.jpg"
                  alt=""
                  style="width: 42px;position:absolute;bottom: 10px;right: 10px;bottom: 16px">
              </div>
            </div>
          </div>
        </li>
        <li class="recode-list-item">
           <div class="item-container">
            <img src="https://img.bosszhipin.com/boss/avatar/avatar_7.png" alt="招聘者头像" style="width: 42px;border-radius: 100%;float: left">
            <div class="info-right">
              <p style="margin-bottom: 10px">张海双 | 招聘者</p>
              <div class="info-details">
                <p style="color: #414a60;">前端实习生 - 有转正机会<span style="margin-left: 20px;color: #fc6c38;">400-450／天</span> <span style="float: right;padding-right: 50px">网易</span></p>
                <p style="margin-top: 13px;font-size: 12px;">杭州 滨江区 长河 在校/应届本科  <span style="float: right;padding-right: 50px">移动互联网 · 已上市 · 10000人以上</span></p>
                <img
                  src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20200424/a6b7e12e59c797fe3defd1ba6b163db0fd17edca5c902374e3c4007d899331b4_s.jpg"
                  alt=""
                  style="width: 42px;position:absolute;bottom: 10px;right: 10px;bottom: 16px">
              </div>
            </div>
          </div>
        </li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
        <li class="recode-list-item"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
.recode-container{
  background-color: #f6f6f8;
  .recode-list-container {
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    .recode-list-item {
      list-style: none;
      height: 150px;
      border-bottom: 1px solid #edf0f5;
      padding: 20px 70px;
      :hover {
        cursor: pointer;
      }
      .info-right{
        float: left;
        margin-left: 2%;
        .info-details {
          width: 760px;
          height: 75px;
          background-color: #fafafc;
          overflow: hidden;
          position: relative;
          padding: 10px 20px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }
}
</style> 