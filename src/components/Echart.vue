<template>
    <div id="chart" ref="chartRef" :style="styleObj">
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref, unref } from "vue";
import { EChartsOption } from "echarts"
import { useEcharts } from "@/hooks/useEcharts"
const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
const yAxisData = [
    '原因1',
    '原因2',
    '原因3',
    '原因4',
    '原因5',
    '原因6',
    '原因7',
    '原因8',
    '原因9',
    '原因10',
];
const props = defineProps({
    option: {
        type: Object,
        default: {}
    },
    styleObj: {
        type: Object,
        default: {
            height: "100%",
            width: "100%"
        }
    }
})
// interface Props {
//     option: EChartsOption,
//     styleObj: CSSStyleDeclaration,
//     theme: string
// }
// const props = withDefaults(defineProps<Props>(),{
//     option:null,
//     styleObj:{
//         height: "100%",
//         width: "100%"
//     }
// })

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useEcharts(chartRef)
onMounted(() => {
    setOptions(props.option as EChartsOption);
})
</script>

<style lang="scss" scoped></style>
