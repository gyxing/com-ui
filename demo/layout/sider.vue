<template>
    <div class="menu-list">
        <div v-for="(item,index) in menuList" :key="index" class="item">
            <router-link :to="item.to">
                <span class="name">{{item.name}}</span>
                <span class="desc" v-if="item.desc">{{item.desc}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                    {name: '快速上手', desc: '', to: '/start'},
                    {name: 'Button', desc: '按钮', to: '/button'},
                    {name: 'Icon', desc: '图标', to: '/icon'},
                    {name: 'Layout', desc: '布局', to: '/layout'},
                    {name: 'Modal', desc: '模态窗', to: '/modal'},
                    {name: 'Table', desc: '表格', to: '/table'},
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .menu-list {
        padding: 15px 0;
        .item {
            a {
                display: block;
                padding: 10px 5px 10px 20px;
                &.router-link-exact-active {
                    .name {
                        color: #3a95ff;
                    }
                }
            }
            .name {
                font-size: 16px;
            }
            .desc {
                font-size: 12px;
                color: #999;
                margin-left: 8px;
            }
            &:hover {
                background-color: #f5f5f5;
                .name {
                    color: #3a95ff;
                }
            }
        }
    }
</style>
