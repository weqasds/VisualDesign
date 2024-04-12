import { Ref, onMounted, onDeactivated, onBeforeUnmount, unref, nextTick } from "vue"
import * as echarts from 'echarts';
import { EChartsOption } from "echarts"
import { useDebounceFn, useEventListener, useTimeout, useTimeoutFn, tryOnUnmounted } from "@vueuse/core"
export function useEcharts(elRef: Ref<HTMLDivElement>) {
  let chartInstance: echarts.ECharts = null;
  let reSizeFn = echartsResize;
  let cacheOption = {} as Ref<EChartsOption>;
  let removeFn = () => { };
  reSizeFn = useDebounceFn(echartsResize, 200);
  function initCharts() {
    const el = unref(elRef)
    if (!el) {
      return
    }
    chartInstance = echarts.init(el)
    removeFn = useEventListener(el, 'echartsResize', reSizeFn);
  }
  function setOptions(options: EChartsOption) {
    // return new Promise(()=>{})待决议
    initCharts()
    chartInstance.setOption(options)
  }
  function echartsResize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: 'quadraticIn',
      },
    }
    )
  }
  tryOnUnmounted(() => {
    if (!chartInstance) return;
    removeFn();
    chartInstance.dispose();
    chartInstance = null;
  });

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }
  // 防止 echarts 页面 keepAlive 时，还在继续监听页面
  return {
    setOptions,
    echartsResize,
    echarts,
    removeFn
  }
}