<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
body{
      background: #efe7da;
}
.el-header{
        padding:0!important;
        background:#545c64;
    }
    ul{
     list-style:none
    }
    .el-main{
            padding:0!important;
        }
</style>
