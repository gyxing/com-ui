<template>
    <span class="sim-icon" :class="{active: canClick}" :style="spanStyle" @click="btnClick()">
        <svg class="sim-icon__svg" aria-hidden="true" :style="svgStyle">
            <use :xlink:href="path"></use>
        </svg>
    </span>
</template>

<script>
    export default {
        name: 'Icon',
        props: {
            type: { type: String, default: () => '' },
            size: { type: String, default: () => '20' },
            color: { type: String, default: () => '#666' }
        },
        data() {
            return {
                canClick: false
            }
        },
        computed: {
            path() {
                return `#icon-${this.type}`;
            },
            spanStyle() {
                return {color: this.color}
            },
            svgStyle() {
                return {
                    width: this.size + 'px',
                    height: this.size + 'px'
                }
            }
        },
        created() {
            if(this.$listeners['click']) {
                this.canClick = true;
            }
        },
        methods: {
            btnClick() {
                if(this.$listeners['click']) {
                    this.$emit('click')
                }
            }
        }
    }
</script>