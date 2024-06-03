<template>
    <div class="left-panel">
        <ul>
            <li v-for="(item,index) in NAV_LIST" :key="index" @click="goRoute(item)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script >
import { NAV_LIST } from '../const/nav.js'
export default {
    data(){
        return {
            NAV_LIST
        }
    },
    methods:{
        goRoute(item){
          const { url } =item
          const { fullPath } = this.$route
          if(fullPath===url){
             return 
          }
          this.$router.push(url)
        }
    }
}
</script>

<style lang="less" scoped>
.left-panel{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>