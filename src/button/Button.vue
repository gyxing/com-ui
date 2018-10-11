<template>
    <div class="sim-button" :disabled="btnDisabled" @click="btnClick()">
        <span class="sim-button__loading" v-if="loading && btnLoading">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                 attributeName="transform"
                 attributeType="XML"
                 type="rotate"
                 dur="1s"
                 from="0 50 50"
                 to="360 50 50"
                 repeatCount="indefinite" >
              </animateTransform>
            </path>
          </svg>
        </span>
        <span><slot/></span>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            data: {type: Object, default: () => ({}) },     // 需传递的数据
            disabled: {type: Boolean, default: () => false },// 当前是否不可点
            loading: {type: Boolean, default: () => false } // 是否有loading
        },
        data() {
            return {
                btnDisabled: this.disabled,
                btnLoading: false
            }
        },
        watch: {
            disabled( val ) {
                this.btnDisabled = val
            }
        },
        methods: {
            btnClick() {
                // 已绑定点击事件、可点击状态下
                if (this.$listeners['click'] && !this.btnLoading && !this.btnDisabled) {
                    if (this.loading) {
                        this.btnLoading = true;
                    }
                    this.btnDisabled = true;

                    this.$emit('click', {
                        data: this.data,
                        cb: () => {
                            this.btnLoading = false;
                            this.btnDisabled = false;
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="less">
    .sim-button {
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        border-radius: 6px;
        cursor: pointer;
        width: 80px;
        height: 25px;
        border: solid 1px #999;
        text-align: center;
        &[disabled] {
            cursor: default;
            opacity: 0.6;
        }
        &__loading {
            color: #888;
            line-height: 0;
            height: 100%;
            svg {
                height: 100%;
                fill: currentColor;
            }
        }
    }
</style>
