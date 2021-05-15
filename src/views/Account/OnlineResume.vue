<template>
  <div class="hello">
    <div class="resume-container">
      <div class="left-navmenu">
      </div>
      <div class="main-container">
          <h1>编辑在线简历</h1>
        <Form :model="formItem" :label-width="80" inline>
        <FormItem label="姓名" class="form-item">
            <Input v-model="formItem.name" placeholder="请输入姓名..."></Input>
        </FormItem>
        <FormItem label="电话" class="form-item">
            <Input v-model="formItem.phonenum" placeholder="请输入电话..."></Input>
        </FormItem>
        <FormItem label="邮箱" class="form-item">
            <Input v-model="formItem.email" placeholder="请输入邮箱..."></Input>
        </FormItem>
        <FormItem label="期望职位" class="form-item">
            <Input v-model="formItem.hopeposition" placeholder="请输入期望城市..."></Input>
        </FormItem>
        <FormItem label="理想薪资" class="form-item">
            <Input v-model="formItem.hopeSalary" placeholder="请输入理想薪资..."></Input>
        </FormItem>
        <FormItem label="求职状态" style="width: 275px" class="form-item">
            <Select v-model="formItem.curstatus">
                <Option value="beijing">离校-随时到岗</Option>
                <Option value="shanghai">在校-暂不考虑</Option>
                <Option value="shenzhen">在校-考虑机会</Option>
                <Option value="shenzhen">在校-月内到岗位</Option>
            </Select>
        </FormItem>
        <FormItem label="出生日期" class="form-item">
            <DatePicker type="date" placeholder="选择日期" v-model="formItem.birthday"></DatePicker>
        </FormItem>
        <FormItem label="性别" class="form-item">
            <RadioGroup v-model="formItem.sex" type="button" button-style="solid">
                <Radio label="Male">男</Radio>
                <Radio label="Female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="工作城市" style="width: 275px" class="form-item">
            <Select v-model="formItem.workcity">
                <Option value="beijing">杭州</Option>
                <Option value="shanghai">天津</Option>
                <Option value="shenzhen">北京</Option>
                <Option value="shenzhen">郑州</Option>
            </Select>
        </FormItem>
        <FormItem label="个人优势" style="width: 550px">
            <Input v-model="formItem.peradvantage" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="在这里输入个人优势..."></Input>
        </FormItem>
        <FormItem label="实习经历" style="width: 550px">
            <Input v-model="formItem.internshipexperience" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="在这里输入实习经历..."></Input>
        </FormItem>
        <FormItem label="项目经历" style="width: 550px">
            <Input v-model="formItem.proexperence" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="在这里输入项目经历..."></Input>
        </FormItem>
        <FormItem label="教育经历" style="width: 550px">
            <Input v-model="formItem.educationexperence" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="在这里输入教育经历..."></Input>
        </FormItem>
        <FormItem label="资格证书" style="width: 550px">
            <Input v-model="formItem.qualification" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="在这里输入资格证书..."></Input>
        </FormItem>
        <FormItem label="其他" style="width: 550px">
            <Input v-model="formItem.others" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="其他..."></Input>
        </FormItem>
        <FormItem style="text-algin: center;" class="form-item"> 
            <Button type="primary" style="margin-left: 25%" @click="gotoMyonline">提 交</Button>
            <Button style="margin-left: 10px">重 置</Button>
        </FormItem>
    </Form>
      </div>
      <div class="right-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      formItem: {
      }
    }
  },
  methods: {
    gotoMyonline () {
        this.$router.push('/onlineresume')
    }
  }
}
</script>

<style scoped>
.hello {
    background-color: #f6f6f8;
    padding: 100px;
}
.main-container {
  width: 65%;
  background-color: #fff;
  margin: 0 auto;
  padding: 10px 100px;
  border: 1px solid #7dd2c8;
  border-radius: 12px;
  padding-top: 50px;
}
.form-item{
    width: 280px;
}
.main-container h1 {
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
}
</style>
