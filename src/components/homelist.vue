<template>
    <div class="goodlist">
        <el-row>
            <h1>{{grouptitle}}</h1>
        </el-row>
        </button>
        <el-row class="warpper">
            <ul>
             <router-link tag="li" v-for="(items,index) in events" :to="{name:'details',params:{id:items.id}}" :key="index">
                    <el-card :body-style="{ padding: '0px',border:0 }">
                        <img :src="'http://ms.xika1024.xin/uploads/'+items.article_pic" class="image">
                        <div style="padding: 14px;">
                            <span>{{items.title}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ items.add_time }}</time>
                            </div>
                        </div>
                    </el-card>
            </router-link>
            </ul>
        </el-row>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                grouptitle: "美食大全",
                events: []
            }
        },
        created() {
            axios({
                    method: 'get',
                    url: 'http://ms.xika1024.xin/api/index/getFoodData?page=1&limit=10'
                })
                .then(res => {
                    this.events = res.data.data;
                    for(var i=0;i<res.data.data.length;i++){
                        var list = this.events[i];
                        list.add_time = new Date(list.add_time*1000).toLocaleDateString().replace(/\//g, "-") + " " + new Date(list.add_time).toTimeString().substr(0, 8);//直接用 new Date(时间戳) 格式转化获得当前时间
                    }
                })
                .catch(() => {
                    console.log(error);
                })
        }
    }
</script>
<style>
        
</style>
<style scoped>
    .goodlist {
        width: 900px;
        margin: 0 auto;
    }

    .el-card__body {
        padding: 0;
    }
    .group {
        margin-bottom: 20px;
        cursor: pointer;
    }
    h1 {
        margin: 30px 0;
        text-align: center;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    .bottom {
        margin-top: 6px;
    }
    .button {
        padding: 0;
        float: right;
    }
    .image {
        width: 100%;
        display: block;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

.warpper ul {
    background: #FFF;
    overflow: hidden;
    box-shadow: 0 1px 2px #c1c1c1;
    padding: 20px 0 0 14px;
   display: flex;
    flex-wrap: wrap;
}

.warpper ul li {
    width: 200px;
    background: #FFF;
    vertical-align: top;
    margin: 0 7px 20px 7px;
    border: 1px solid #f5f5f5;
    display: inline-block;
}

.warpper ul li img {
    width: 100%;
    height: 150px;
}

.warpper ul li .names {
    text-align: left;
    padding: 12px;
    font-size: 14px;
    color: #2f2f2f;
    font-weight: bold;
}

     @media screen and ( max-width: 640px) {
         .goodlist {
        width: 100%;
        margin: 0 auto;
    }

        .warpper ul li {
        width: 44%;
    }
    .warpper ul li img {
        width: 100%;
        height: 134px;
    }
    .warpper ul li .names {
        padding: 8px;
        font-size: 12px;
    }
    }
</style>
