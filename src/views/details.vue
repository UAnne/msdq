<template>
    <el-container>
        <el-main>
            <div class='goodsdetail'>
                <div class='goodsinfo'>
                    <div class="pic" :style="{'background': 'url(' + 'http://ms.xika1024.xin/uploads/'+items.article_pic + ') no-repeat center center'}"></div>  
                    <div class="info">
                        <h1>{{items.title}}</h1>
                        <p class="add_time">{{items.add_time}}<span>{{items.author}}</span></p>
                        <el-row>
                            <p class="desc"><strong>“</strong>{{items.descriptor}}<strong>”</strong></p>
                        </el-row>
                        <div class="material-title">用料：</div>
                        <div>
                            <dl class="material-info">
                                <dt class="red">主料</dt>
                                <dd>{{items.main_ingredient}} </dd>
                            </dl>
                        </div>
                        <div>
                            <dl class="material-info">
                                <dt class="grey">辅料</dt>
                                <dd>{{items.ingredient}}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class='goodscontent' v-html="items.content"></div>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import axios from "axios";
    export default {
        data() {
            return {
                 items: {}
            }
        },
          mounted() {
            const id = this.$route.params.id;
            axios({
            method: "get",
            url: "http://ms.xika1024.xin/api/index/getFoodDataDetail?id=" + id
            })
            .then(res => {
                console.log(res.data.data);
                this.items = res.data.data;
                var list = this.items;
                // 时间戳
                list.add_time = new Date(list.add_time*1000).toLocaleDateString().replace(/\//g, "-") + " " + new Date(list.add_time).toTimeString().substr(0, 8);//直接用 new Date(时间戳) 格式转化获得当前时间
            })
            .catch(() => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
    .goodsdetail {
        width: 900px;
        margin: 20px auto;
    }
     @media screen and ( max-width: 640px) {
        .goodsdetail {
        width: 100%;
        margin: 0 auto;
     }
    }
</style>
<style>
.goodscontent ul li p:first-child{
    float:left;
    }
</style>
<style scoped>
.goodsinfo{
  display:flex;
  background:#fff;
}
.pic{
      width: 40%;
}
.add_time{
  color: #858585;   
   font-size: 13px;
}
.add_time span{
  margin-left:20px;
  color:#888;
}
.goodsinfo img {
  min-height: 400px;
}
.row-bg {
  background: #fff;
}
h1 {
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 30px;
}
.info {
  padding: 24px;
  width:60%;
}
p.desc {
  line-height: 24px;
  font-size: 14px;
  padding: 10px 0;
  color: #666;
}
p.desc strong {
  font-size: 24px;
  color: #ddd;
  font-family: arial;
  font-weight: bold;
  padding: 0px 3px;
}
.material-title {
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 10px;
  color: #c0ae7d;
}
.material-info,
 {
  margin-bottom: 10px;
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 18px;
  font-size: 14px;
  padding-top: 8px;
  display: flex;
  flex: 1;
}

.red {
  background: #e90808;
  height: 24px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border: 1px solid #e90808;
  margin-right: 10px;
  width: 50px;
}
.grey {
  color: #999;
  background: #f5f5f5;
  margin-right: 10px;
  font-size: 12px;
  width: 50px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #ddd;
}
dd {
  width: 80%;
  line-height: 26px;
}

 @media screen and ( max-width: 640px) {
       .goodscontent {
          width: 88%;
          margin: 10px;
          padding: 12px 0;
          border-radius: 6px;
          margin-top: 10px;
      } 
        h1 {
            font-size: 18px;      
             border-bottom: 1px solid #e4e4e4;
        margin-bottom: 10px;
        padding-bottom: 20px;   
         font-weight: normal;
        }
         .goodsinfo .pic {
            height: 260px;
            width:100%;
        }
        .info{
          width:100%;
        }
        .goodsinfo {
            flex-wrap: wrap;
        }
        .goodsinfo {
            margin-bottom: 20px
        }
        .goodsinfo p {
            font-size: 12px;
        }
        .material-info dd {
            font-size: 12px;
            line-height: 24px;
        }
    }
.goodscontent{
    background:#fff;
            margin-top: 20px;
        margin-bottom: 50px;
        padding: 20px;
        width: 800px;
        box-shadow: 0 1px 2px #c1c1c1;
}
  
</style>