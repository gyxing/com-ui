<template>
    <div class="sim-layout" :class="{'sim-layout-inline': inline}"><slot></slot></div>
</template>
<script>
export default {
    name:'Layout',
    props: {
        inline: { type: Boolean }
    }
}
</script>
