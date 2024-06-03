<template>
   <div class="main-container">
     <div class="header">
        <Header></Header>
     </div>
     <div class="section">
        <div class="left">
            <LeftPanel></LeftPanel>
        </div>
        <div class="content">
            <Content></Content>
        </div>
     </div>
   </div>
</template>
<script>
import Header from './Header.vue'
import LeftPanel from './LeftPanel.vue'
import Content from './Content.vue'
/* eslint-disable */
export default {
    name: 'Layout',
    data() {
        return {
            width: "100%"
        }
    },
    components:{
        Header,
        LeftPanel,
        Content
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
.main-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    .header{
        width: 100%;
        height: 100px;
        background-color: red;
    }
    .section{
         flex: 1;
         width: 100%;
         display: flex;
         align-items: center;
         .left{
            flex-shrink: 0;
            width: 200px;
            height: 100%;
            background-color: green;
         }
         .content{
            flex: 1;
            height: 100%;
         }
         
    }

}

</style>