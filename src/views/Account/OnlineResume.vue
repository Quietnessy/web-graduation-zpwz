<template>
  <div class="hello">
    <div class="resume-container">
      <div class="left-navmenu">
      </div>
      <div class="main-container">
          <h1>编辑在线简历</h1>
        <Form :model="formItem" :label-width="100">
        <FormItem label="姓名">
            <Input v-model="formItem.name" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="电话">
            <Input v-model="formItem.phonenum" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="邮箱">
            <Input v-model="formItem.email" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="期望职位">
            <Input v-model="formItem.hopeposition" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="理想薪资">
            <Input v-model="formItem.hopeSalary" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="当前求职状态" style="width: 300px">
            <Select v-model="formItem.curstatus">
                <Option value="beijing">离校-随时到港</Option>
                <Option value="shanghai">在校-暂不考虑</Option>
                <Option value="shenzhen">在校-考虑机会</Option>
                <Option value="shenzhen">在校-月内到岗位</Option>
            </Select>
        </FormItem>
        <FormItem label="出生日期">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.birthday"></DatePicker>
        </FormItem>
        <FormItem label="性别">
            <RadioGroup v-model="formItem.sex">
                <Radio label="Male">男</Radio>
                <Radio label="Female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="工作城市" style="width: 300px">
            <Select v-model="formItem.workcity">
                <Option value="beijing">杭州</Option>
                <Option value="shanghai">天津</Option>
                <Option value="shenzhen">北京</Option>
                <Option value="shenzhen">郑州</Option>
            </Select>
        </FormItem>
        <FormItem label="个人优势">
            <Input v-model="formItem.peradvantage" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="实习经历">
            <Input v-model="formItem.internshipexperience" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="项目经历">
            <Input v-model="formItem.proexperence" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="教育经历">
            <Input v-model="formItem.educationexperence" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="资格证书">
            <Input v-model="formItem.qualification" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="其他">
            <Input v-model="formItem.others" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem style="text-algin: center;">
            <Button type="primary" style="margin-left: 20%">提 交</Button>
            <Button style="margin-left: 50px">重 置</Button>
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
  }
}
</script>

<style scoped>
.hello {
    background-color: #f6f6f8;
    padding: 100px;
}
.main-container {
  width: 60%;
  background-color: #fff;
  margin: 0 auto;
  padding: 10px 100px;
  border: 1px solid #7dd2c8;
  border-radius: 12px;
  padding-top: 50px;
}
.main-container h1 {
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
}
</style>