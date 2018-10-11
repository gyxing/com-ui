<template>
    <Layout>
        <Header><my-header /></Header>
        <Layout inline>
            <Sider><my-sider /></Sider>
            <Content>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import MyHeader from './header';
    import MySider from './sider'
    export default {
        name: "index",
        components: {
            MyHeader,
            MySider
        }
    }
</script>

<style lang="less" scoped>

</style>
