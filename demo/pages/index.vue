<template>
    <div class="home">
        <div class="home__main">
            <div class="home__title">SIM UI</div>
            <div class="home__desc">一枚基于Vue.js的简易UI组件库</div>
            <div class="home__btns">
                <Button>
                    <router-link to="/start">开始使用</router-link>
                </Button>
                <Button>
                    <a href="https://github.com/gyxing/simui" target="_blank">Go to Github</a>
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    .home {
        display: table;
        width: 100%;
        height: 100%;
        &__main {
            display: table-cell;
            text-align: center;
            vertical-align: middle;
        }
        &__title {
            font-size: 38px;
            color: #072e57;
        }
        &__desc {
            font-size: 24px;
            color: #2d4a6c;
            margin: 26px 0 60px;
        }
        &__btns {
            display: inline-block;
            .sim-button {
                margin: 0 10px;
            }
        }
    }
</style>
