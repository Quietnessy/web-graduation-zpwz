<template>
  <div class="login-container">
    <div class="reglogin-container">
      <!-- 登录 -->
      <Card v-if="curCard === 'login'" class="card-login">
        <h2>一键登录</h2>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width='70' style="width: 80%;margin-top: 50px">
          <FormItem prop="user" class="form-item">
            <Input v-model="formInline.user" prefix="ios-person-outline" placeholder="请输入用户名" size="large"/>
          </FormItem>
          <FormItem prop="password" class="form-item">
            <Input v-model="formInline.password" prefix="ios-lock-outline" placeholder="请输入密码" size="large" type="password" password/>
          </FormItem>
          <FormItem class="form-item" style="padding-left: 10%;">
            <RadioGroup v-model="formInline.role">
              <Radio label="求职者" border></Radio>
              <Radio label="招聘者" border style="margin-left: 60px"></Radio>
            </RadioGroup>
          </FormItem>
          <FormItem class="form-item" style="margin-top: 30px">
            <div class="btn-operation" @click="btnLogin">立 即 登 录</div>
          </FormItem>
          <div class="forget-container">
            <span @click="forgetPassword">修改密码?</span> | <span @click="register">免费注册</span>
          </div>
        </Form>
      </Card>
      <!--更改密码 -->
      <Card v-if="curCard === 'changepassword'" class="card-changepassword">
        <h2>修改密码</h2>
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
            <!-- <Button type="info" ghost long  icon="md-checkmark">确 认</Button> -->
            <div class="btn-operation" @click="btnChangePaassword">确 认</div>
          </FormItem>
          <div class="forget-container" style="margin-left: 50%">
            <span @click="gotoLogin">登 录</span> | <span @click="register">注 册</span>
          </div>
        </Form>
      </Card>
      <!-- 注册 -->
      <Card v-if="curCard === 'register'" class="card-register">
        <h2>一键注册</h2>
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
          <FormItem class="form-item" style="padding-left: 10%;">
            <RadioGroup v-model="formRegister.role">
              <Radio label="求职者" border></Radio>
              <Radio label="招聘者" border style="margin-left: 50px"></Radio>
            </RadioGroup>
          </FormItem>
          <FormItem class="form-item" style="margin-top: 30px">
            <div class="btn-operation" @click="btnRegister">立 即 注 册</div>
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
import { mapActions } from 'vuex'
import { mapState } from "vuex";
import { mytestAPi } from "../../api/jobseekersApi"
export default {
  data () {
    return {
      curCard: 'login',
      cityList: [],
      formInline: {},
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
  mounted () {
    this.getAllCity()
  },
  methods: {
    // ...mapActions(['setUserName']),
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
    async getAllCity () {
      try {
        const res = await mytestAPi()
        console.log('执行了这个函数')
        if (res.code !== '00000') {
          this.$Message.warning(res.msg)
          return
        }
        this.cityList = res.data || []
        console.log(this.cityList, '这是调用接口获取到的城市列表')
      } catch (error) {
        this.$Message.error('网络开小差了！！！')
        console.log(error)
      }
    },
    btnLogin () {
      if (this.formInline.user === '') {
        this.$Message.warning({ background: true, content: '用户名不能为空' })
        return
      }
      if (this.formInline.password === '') {
        this.$Message.warning({ background: true, content: '密码不能为空' })
        return
      }
      if (this.formInline.user !== 'xiaoxuyang') {
        this.$Message.warning({ background: true, content: '用户名不存在' })
        return
      }
      if (this.formInline.password !== '123456') {
        this.$Message.warning({ background: true, content: '密码错误' })
        return
      }
      this.$Message.success({ background: true, content: '登 录 成 功' })
      // 设置登录用户登录后的一些信息
      this.$store.commit('setUserName', 'xiaoxuyang');
      const curRolename = this.formInline.role === '求职者' ? 'Jobseeker':'Recruiter'
      this.$store.commit('setCurRole', curRolename)
      this.$store.commit('setUserImage', 'https://img.bosszhipin.com/boss/avatar/avatar_16.png')
      if (this.formInline.role === '求职者') {
        this.$router.push({
          name: '首页',
          params: { username: 'xiaoxuyang_i' }
        })
      } else {
        this.$router.push({
          name: '我的职位',
          params: { username: 'xiaoxuyang_i' }
        })
      }
    },
    btnRegister () {
      if (this.formRegister.user === '' || this.formRegister.password === '' || this.formRegister.sepassword === '') {
        this.$Message.warning({
          background: true,
          content: '表单字段不能为空，请完善表单~'
        })
        return
      }
      if (this.formRegister.user === 'xiaoxuyang' && this.formRegister.password === '123456' && this.formRegister.sepassword === '123456') {
        this.$Message.success({ background: true, content: '注 册 成 功' })
        return
      }
      this.$Message.warning({ background: true, content: '密码与确认密码不一致' })
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
  height 100vh
  position absolute
  background: rgba(96, 212, 198, 0.8);
  background-image url(https://static.zhipin.com/zhipin-geek/v396/web/geek/images/newbg.png)
  background-repeat no-repeat
  background-attachment fixed
  background-size 100% 100%
  .reglogin-container
    .card-login
    .card-register
    .card-changepassword
      background-color #f8fcff
      border 1px solid #ccc
      border-radius 10px
      padding-left 1.4%
      width 40%
      height 60%
      position absolute
      left 50%
      top 40%
      transform  translate(-50%, -50%)
      .form-item
        margin-top 8%
        .btn-operation
          width 100%
          height 40px
          line-height 40px
          text-align center
          border 1px solid #ccc
          cursor pointer
          border-radius 3px
          color #fff
          background-color #53CAC3
      .forget-container
        font-size 12px
        margin-left: 45%
        span:hover
          cursor pointer
          color #53CAC3
      h2
        font-weight 500
        letter-spacing 5px
        color #00C2B3
</style>