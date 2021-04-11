<template>
  <div class="login-container">
    <div class="reglogin-container">
      <Card v-if="curCard === 'login'" class="card-login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width='70' style="width: 80%;">
          <FormItem prop="user" class="form-item">
            <Input v-model="formInline.user" prefix="ios-person-outline" placeholder="请输入用户名" size="large"/>
          </FormItem>
          <FormItem prop="password" class="form-item">
            <Input v-model="formInline.password" prefix="ios-lock-outline" placeholder="请输入密码" size="large" type="password" password/>
          </FormItem>
          <FormItem class="form-item" style="margin-top: 30px">
            <Button type="info" ghost long @click="btnLogin" icon="md-checkmark">立 即 登 录</Button>
          </FormItem>
          <div class="forget-container">
            <span @click="forgetPassword">修改密码?</span> | <span @click="register">免费注册</span>
          </div>
        </Form>
      </Card>
      <Card v-if="curCard === 'changepassword'" class="card-changepassword">
        <Form :model="formchaPassword" :rules="chaFormRule" :label-width='70' style="width: 80%;">
          <FormItem prop="oldpassword" class="form-item">
            <Input v-model="formRegister.oldpassword" prefix="ios-lock-outline" placeholder="请输入旧密码进行身份验证" size="large" type="password" password/>
          </FormItem>
          <FormItem prop="newpassword" class="form-item">
            <Input v-model="formRegister.newpassword" prefix="ios-lock-outline" placeholder="请输入新密码" size="large" type="password" password/>
          </FormItem>
          <FormItem prop="senewpassword" class="form-item">
            <Input v-model="formRegister.senewpassword" prefix="ios-lock-outline" placeholder="请再次输入新密码" size="large" type="password" password/>
          </FormItem>
          <FormItem class="form-item" style="margin-top: 30px">
            <Button type="info" ghost long @click="btnChangePaassword" icon="md-checkmark">确 认</Button>
          </FormItem>
          <div class="forget-container">
            <span @click="gotoLogin">登 录</span> | <span @click="register">注 册</span>
          </div>
        </Form>
      </Card>
      <!-- 注册 -->
      <Card v-if="curCard === 'register'" class="card-register">
        <Form :model="formRegister" :rules="regFormRule" :label-width='70' style="width: 80%;">
         <FormItem prop="user" class="form-item">
            <Input v-model="formRegister.user" prefix="ios-person-outline" placeholder="请输入用户名" size="large"/>
          </FormItem>
          <FormItem prop="password" class="form-item">
            <Input v-model="formRegister.password" prefix="ios-lock-outline" placeholder="请输入密码" size="large" type="password" password/>
          </FormItem>
          <FormItem prop="sepassword" class="form-item">
            <Input v-model="formRegister.sepassword" prefix="ios-lock-outline" placeholder="请再次输入新密码" size="large" type="password" password/>
          </FormItem>
          <FormItem class="form-item" style="margin-top: 30px">
            <Button type="info" ghost long @click="btnRegister" icon="md-checkmark">立 即 注 册</Button>
          </FormItem>
          <div class="forget-container">
            <span @click="gotoLogin">已有账号?立即登录>></span>
          </div>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curCard: 'login',
      formInline: {
        user: '',
        password: ''
      },
      formRegister: {},
      formchaPassword: {},
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ]
      },
      regFormRule: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ],
        sepassword: [
          { required: true, message: '请再次输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ]
      },
      chaFormRule:{
        oldpassword: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ],
        newpassword: [
          { required: true, message: '请再次输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ],
        senewpassword: [
          { required: true, message: '请再次输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于六位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击去注册模块
    register () {
      this.curCard = 'register'
    },
    // 点击去修改密码模块
    forgetPassword () {
      this.curCard = 'changepassword'
    },
    // 点击去登录页面
    gotoLogin () {
      this.curCard = 'login'
    },
    btnLogin () {
      this.$Message.success({
         background: true,
         content: '登 录 成 功'
      })
    },
    btnRegister () {
      this.$Message.success({
         background: true,
         content: '注 册 成 功'
      })
    },
    btnChangePaassword () {
      this.$Message.success({
         background: true,
         content: '修改成功'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-container
  width 100%
  height 94.7%
  position absolute
  background-color #00d7c6
  background-image url(https://static.zhipin.com/zhipin-geek/v396/web/geek/images/newbg.png)
  background-repeat no-repeat
  background-position left
  background-attachment fixed
  background-position center
  background-size 100% 100%
  .reglogin-container
    .card-login
    .card-register
    .card-changepassword
      background-color #f8fcff
      border 1px solid #ccc
      border-radius 5px
      padding-left 1.4%
      width 32%
      position absolute
      left 50%
      top 30%
      transform  translate(-50%, -50%)
      .form-item
        margin-top 40px
      .forget-container
        font-size 12px
        margin-left: 45%
        margin-top -10px
        span:hover
          cursor pointer
          color #4fc3f7
</style>