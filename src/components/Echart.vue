<template>
    <div id="chart" :style="{ width: $width + 'px', height: $height + 'px' }">
    </div>
</template>

<script setup>
import { def } from "@vue/shared";
import { onMounted, onUnmounted, reactive, getCurrentInstance, ref } from "vue"
const proxy = getCurrentInstance()
onMounted(() => {
    const chart = proxy.$echart.init(document.getElementById("chart"), 'walden');
    init(chart)
    show(chart)
    resize(chart)
})
onUnmounted(() => {
    clearInterval(interval)
})
const props = defineProps({
    option: {
        type: Object,
        default: () => { }
    },
    data: {
        type: Array,
        required: true
    },
    $width: {
        type: [Number, String],
        default: () => 600
    },
    $height: {
        type: [Number, String],
        default: () => 400
    }

})
</script>

<style lang="scss" scoped></style>
