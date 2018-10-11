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