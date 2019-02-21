<template>
    <el-container>
        <el-header>
            <navbar></navbar>
        </el-header>
        <el-main>
            <homelist></homelist>
        </el-main>
    </el-container>
</template>
<script>
    import navbar from "../components/navbar";
    import homelist from "../components/homelist";
    export default {
        data() {
            return {}
        },
        components: {
            navbar,
            homelist
        }
    }
</script>
<style scoped>
    
</style>
