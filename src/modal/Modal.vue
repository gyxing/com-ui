<template>
    <div class="sim-modal" v-if="visible" @click="hide($event)">
        <div class="sim-modal__wrap">
            <div class="sim-modal__title" v-if="title">{{title}}</div>
            <div class="sim-modal__body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            title: { type: String },
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true;
                $('body').css('overflow', 'hidden');
            },
            hide(event) {
                if( (event && event.target.className === 'b-modal') || !event ) {
                    $('body').css('overflow', 'initial');
                    this.visible = false;
                }
            }
        }
    }
</script>

<style lang="less">
    .sim-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(76, 76, 76, 0.5);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fade-in 0.5s;
        overflow-y: auto;
        -webkit-transform: translateZ(0);
        &__wrap {
            min-width: 100px;
            max-width: 90%;
            min-height: 100px;
            max-height: 95%;
            position: relative;
            animation: show-modal 0.5s;
            background-color: #fff;
            border-radius: 6px;
        }
        &__title {
            text-align: center;
            padding: 8px 0 3px;
            font-size: 20px;
            color: #333;
        }
        &__body {
            color: #333;
            padding: 15px;
        }
    }
    @keyframes show-modal {
        0% {
            opacity: 0;
            transform: translate(0,-10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
</style>
