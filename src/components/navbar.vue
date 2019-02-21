<template>
  <div class="navbar">
    <el-menu :default-active="this.$router.path" router mode="horizontal"  class="el-menu-demo" text-color="#000" active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{item.navItem}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        navList: [{
          navItem: "首页",
          name:'/home'
        },{
          navItem: "美食大全",
          name:'/'
        },{
          navItem: "养生大全",
          name:'/'
        }]
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

</style>