<template>
    <div class="header">
        <div class="logo">SIM UI</div>
        <div class="nav">
            <router-link to="/">首页</router-link>
            <router-link to="/start" class="active">组件</router-link>
            <a href="https://github.com/gyxing/simui" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .logo {
        font-size: 20px;
        padding-left: 30px;
    }
    .nav {
        height: 100%;
        padding-right: 35px;
        a {
            display: inline-block;
            height: 100%;
            box-sizing: border-box;
            padding: 15px 15px 0;
            font-size: 14px;
            &.active,
            &:hover {
                color: #3a95ff;
                border-bottom: 2px solid #3a95ff;
            }
        }
    }
</style>
