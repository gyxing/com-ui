<template>
    <div class="sim-table">
        <div class="tb tb-head">
            <div v-for="(item,i) in columns" :key="i" class="cell" :class="{cell_cb:item.type}" :style="item.style? item.style : {}">
                <input :type="item.type" v-if="item.type" @click="allSelect" :checked="cbIds.length===data.length">
                <span v-else>{{item.title}}</span>
            </div>
        </div>
        <div v-if="data.length===0" class="tb">
            <div class="cell cell-nodata">暂无数据</div>
        </div>
        <div v-for="(item,index) in data" :key="index" class="tb">
            <div v-for="(field,i) in columns" :key="i" class="cell" :class="{cell_cb:field.type}" :style="field.style? field.style : {}">
                <input :type="field.type" v-if="field.type" v-model="cbIds" :value="item.id">
                <div v-else-if="field.render">
                    <slot :name="field.render.name" :data="item"></slot>
                </div>
                <span v-else>{{item[field.key]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Table',
        props: {
            columns: {
                type: Array,
                default: () => ([
                    {
                        title: 'column1',
                        key: 'c1'
                    }, {
                        title: 'column2',
                        key: 'c2'
                    }
                ])
            },
            data: { type: Array, default: () => ([]) }
        },
        data() {
            return {
                cbIds: []
            }
        },
        methods: {
            allSelect(e) {
                if (e.target.checked) {
                    this.cbIds = this.data.map(item => item.id)
                } else {
                    this.cbIds = [];
                }
                console.log(this.cbIds)
            }
        },
    }
</script>

<style lang="less">
    .sim-table {
        .tb {
            display: flex;
            width: 100%;
            border-left: solid 1px #ddd;
            &-head {
                background-color: #eee;
                border-top: solid 1px #ddd;
            }
            .cell {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px;
                border-bottom: solid 1px #ddd;
                border-right: solid 1px #ddd;
                box-sizing: border-box;
                word-break: break-all;
                &-nodata {
                    color: #999;
                    padding: 20px 0;
                }
                &_cb {
                    flex: none;
                    width: 50px;
                }
            }
            &:not(.tb-head):hover {
                background-color: #f5f5f5;
            }
        }
    }
</style>
