<template>
    <div id="chart" ref="chartRef" :style="styleObj">
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref, unref } from "vue";
import { EChartsOption, number } from "echarts";
import { useEcharts } from "@/hooks/useEcharts";
import { useExcel } from '@/hooks/excel/useExcel';
import { gridStyle } from '@/types/gridStyleObj';
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
        type: Object
    },
    fileUrl: {
        type: String,
        default: ""
    },
    chartType: {
        type: String,
        default: "line"
    },
    styleObj: {
        type: Object,
        default: {
            height: "100%",
            width: "100%"
        }
    },
    gridStyle: {
        type: Object as () => gridStyle,
        default: () => ({
            left: '10%',
            right: '10%',
            top: '60',
            bottom: '60',
            width: 'auto',
            height: 'auto'
        })
    }
})
defineOptions({
    name: 'Echart'
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
const { setOptions } = useEcharts(chartRef);
// const { getSheetProp } = useExcel(props.fileUrl)
onMounted(() => {
    // let { styleObj, gridStyle } = props;
    // const sheetProp = getSheetProp()
    // console.log(sheetProp.data)
    setOptions(props.option as EChartsOption)
    // setOptions({
    //     title: {
    //         show: true,
    //         text: sheetProp.header
    //     },
    //     grid: {
    //         left: gridStyle.left,
    //         right: gridStyle.right,
    //         top: gridStyle.top,
    //         bottom: gridStyle.bottom,
    //         height: gridStyle.height,
    //         width: gridStyle.width
    //     },
    //     xAxis: {
    //         show: true,
    //         position: "bottom"
    //     },
    //     yAxis: {
    //         show: true,
    //         position: "left",
    //         data: yAxisData.reverse()
    //     },
    //     series: {
    //         name: sheetProp.header,
    //         type: "bar",
    //         data: sheetProp.data.sort()
    //     }

    // } as EChartsOption);
})
</script>

<style lang="scss" scoped></style>
