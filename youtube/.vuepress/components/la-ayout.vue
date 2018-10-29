<template>
    <el-container>
  <el-container>
    <el-header class="head">Header</el-header>
    <el-main>
      <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>
<script>
import Service from '../clients/service'
// export const sysClient = new Service('http://data.ntpc.gov.tw/api/')
// import {
//   sysClient
// } from '../clients/hprose-client'
export default {
  data(){
    return{
     alldata: null,
     args: null,
    }
  },
  mounted() {
    this.getall();
  },
  methods: {
    getall(query){
      const sysClient = new Service('http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000157-002')
      this.alldata = sysClient.getData('/382000000A-000157-002',query)
    }
  }
}
</script>

<style>
   .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>