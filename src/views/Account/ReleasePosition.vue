<template>
  <div class="hello">
    <div class="resume-container">
      <div class="left-navmenu">
      </div>
      <div class="main-container">
          <h1>编辑职位信息</h1>
        <Form :model="formItem" :label-width="80">
        <FormItem label="公司名称" class="form-item">
            <Input v-model="formItem.name" placeholder="请输入职位所属公司名称..."></Input>
        </FormItem>
        <FormItem label="职位名称" class="form-item">
            <Input v-model="formItem.phonenum" placeholder="请输入职位名称..."></Input>
        </FormItem>
        <FormItem label="工作城市" class="form-item">
            <Input v-model="formItem.hopeposition" placeholder="请输入工作城市..."></Input>
        </FormItem>
        <FormItem label="工作地点" class="form-item">
            <Input v-model="formItem.hopeSalary" placeholder="请输入工作地点.."></Input>
        </FormItem>
        <FormItem label="职位类型" class="form-item">
            <Input v-model="formItem.hopeSalary" placeholder="请输入职位类型..."></Input>
        </FormItem>
        <FormItem label="经验" class="form-item">
            <Select v-model="formItem.curstatus">
                <Option value="beijing">0年</Option>
                <Option value="shanghai">1-3年</Option>
                <Option value="shenzhen">3-6年</Option>
                <Option value="shenzhen">6年以上</Option>
            </Select>
        </FormItem>
        <FormItem label="学历" class="form-item">
            <Select v-model="formItem.education">
                <Option value="beijing">高中及其以下</Option>
                <Option value="shanghai">大专</Option>
                <Option value="shenzhen">本科</Option>
                <Option value="shenzhen">研究生</Option>
            </Select>
        </FormItem>
        <FormItem label="薪资范围" class="form-item">
            <Select v-model="formItem.salary">
                <Option value="beijing">1k-6k</Option>
                <Option value="shanghai">6k-12k</Option>
                <Option value="shenzhen">12k-22k</Option>
                <Option value="shenzhen">22k以上</Option>
            </Select>
        </FormItem>
        <FormItem label="工作城市" class="form-item">
            <Select v-model="formItem.workcity">
                <Option value="beijing">杭州</Option>
                <Option value="shanghai">天津</Option>
                <Option value="shenzhen">北京</Option>
                <Option value="shenzhen">郑州</Option>
            </Select>
        </FormItem>
        <FormItem label="职位描述" class="form-item">
            <Input v-model="formItem.email" placeholder="请输入职位描述..." type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
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
.main-container h1 {
    font-weight: 400;
    text-align: center;
    margin-bottom: 50px;
}
</style>
