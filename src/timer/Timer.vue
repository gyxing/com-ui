<template>
    <span class="sim-timer">{{t}}</span>
</template>

<script>
    import utils from '../utils';
    export default {
        name: "Timer",
        props: {
            format: { type: String, default: () => 'hh:mm:ss' }
        },
        data() {
            return {
                t: '',
                timer: null
            }
        },
        created() {
            this.timer = window.requestAnimationFrame(this.getT);
        },
        methods: {
            getT() {
                this.t = utils.dateFormat(new Date(), this.format);
                this.timer = window.requestAnimationFrame(this.getT);
            }
        },
        destroyed() {
            window.cancelAnimationFrame(this.timer)
        }
    }
</script>