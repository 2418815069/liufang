<template>
    <div>
  <el-button type="primary" @click="exportpdf">export pdf</el-button>
  <ul>
      <li v-for="todo in todos"></li>
  </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        exportpdf(){
            let vm = this
            let doc = new jsPDF('p','pt');
            doc
        }
    }
  
}
</script>