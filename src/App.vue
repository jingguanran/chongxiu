<template>
  <div id="app">

<el-menu
  :default-active="jgr"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">

  <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
  
  <el-menu-item index="2"><router-link to='/1'>1705a</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to='/2'>待重修</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to='/3'>已重修</router-link></el-menu-item>
  
</el-menu>

    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    components:{
      
    },
    created(){
      if(this.$route.params.id==null){
        this.jgr="1"
      }else{
        this.jgr=parseInt(this.$route.params.id)+1+""
      }
    },
    watch:{
      '$route'(){
        if(this.$route.params.id==null){
        this.jgr="1"
      }else{
        this.jgr=parseInt(this.$route.params.id)+1+""
      }
      }
    },
    data() {
      return {
        jgr: ""
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
a{
  text-decoration:none;
  display:block;
  padding:0 20px

}
.el-menu-item{
  padding:0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
}

</style>
