<template>
  <div class="hello">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
        return {
          tableData: []
        }
      },
      watch:{
        '$route':function(){
          this.J_fetch()
        }
      },
      created(){
        this.J_fetch()
      },
      methods:{
        J_fetch:function(){
          this.$http.post('http://localhost:3000',{state:this.$route.params.id},{emulateJSON:true}).then(e=>this.tableData=e.body)
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
