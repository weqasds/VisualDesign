<template>
    <div style="padding: 5px">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-col :span="24">
                    <h1 style="font-size: 35px;font-family: 宋体">教育</h1>
                    <p style="text-indent: 2em;">
                        教育的定义方式决定着教育的定义内容。从哲学认识论角度分析，
                        教育的定义方式可以分为实在论定义方式和现象学定义方式。
                        教育的实在论定义方式把教育当作一个已经完成的实体或存在者，
                        教育定义是对实体的“符合”或趋近；
                        教育的现象学定义方式把教育当作一个正在发生的存在，
                        教育定义是定义者参与其中而生发出的对教育的认识。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br><br>
                    <p class="text" style="text-indent: 2em;">
                        近年来，新能源汽车已成为全球汽车产业转型的主要方向和促进世界经济持续增长的重要引擎。
                        跨国汽车企业纷纷加大研发投入、完善产业布局，世界主要汽车大国相继加强关于新能源汽车的战略谋划，强化相关政策支持，
                        推动全球产业链重塑。
                    </p>
                    <p class="text" style="text-indent: 2em;">
                        在全球范围内，新一轮科技革命和产业变革的逢勃发展驱使全球汽车行业向电动化、智能化、网联化以及绿色化的趋势迈进。
                        新能源汽车与多个领域内的变革性技术交织，包括新能源、新材料，以及互联网、物联网、大数据及人工智能等，
                        促使汽车从单纯的交通工具向移动智能终端、储能单元和数字空间转变。
                        此外，随着相关技术的提升，发展新能源汽车能够带动能源、交通、信息通信基础设施改造升级，促进能源消费结构优化，
                        提升交通体系及城市运行的智能化水平这一发展不仅对构建清洁美丽世界具有重要意义，也为建设人类命运共同体贡献了积极力量。
                        <br>
                    </p>
                    <p class="text">
                        右侧是我国最近一年的新能源汽车发展情况。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj"></Echart>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj3"></Echart>
                </el-col>
                <el-col :span=8>
                    <br><br><br>
                    <p class="text" style="text-indent: 2em;">

                        自动驾驶，也被称为无人驾驶，是指交通工具在没有人类操作的情况下，能够完成环境的感知与导航，顺利到达目的地。
                        国际权威的机动车工程组织将自动驾驶技术分为六个等级：L0至L5。其中，L0级是没有自动驾驶的纯人工驾驶；
                        L1至L3级是不同程度的辅助驾驶；
                        L4级和L5级则是高度自动驾驶和完全自动驾驶，即在没有特定条件限制下，车辆可以完全自主驾驶，不需要人类干预。
                        目前，自动驾驶系统的设计主要分为两大技术路径，模块化方案和端到端方案。
                    </p>
                    <p class="text">
                        左侧是我国最近一年的新车自动驾驶搭载情况。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br><br><br>
                    <p class="text" style="text-indent: 2em;">
                        如同蒸汽时代的蒸汽机、电气时代的发电机、信息时代的计算机和互联网，人工智能正成为推动人类进入智能时代的决定性力量。
                        全球产业界充分认识到人工智能技术引领新一轮产业变革的重大意义，纷纷转型发展，抢滩布局人工智能创新生态。
                        世界主要发达国家均把发展人工智能作为提升国家竞争力、维护国家安全的重大战略，力图在国际科技竞争中掌握主导权。
                        习近平总书记在十九届中央政治局第九次集体学习时深刻指出，加快发展新一代人工智能是事关我国能否抓住新一轮科技革命和产业变革机遇的战略问题。错失一个机遇，就有可能错过整整一个时代。新一轮科技革命与产业变革已曙光可见，在这场关乎前途命运的大赛场上，我们必须抢抓机遇、奋起直追、力争超越。
                    </p>
                    <p class="text" style="text-indent: 2em;">
                        从专用智能向通用智能发展。如何实现从专用人工智能向通用人工智能的跨越式发展，既是下一代人工智能发展的必然趋势，
                        也是研究与应用领域的重大挑战。2016年10月，美国国家科学技术委员会发布《国家人工智能研究与发展战略计划》，
                        提出在美国的人工智能中长期发展策略中要着重研究通用人工智能。阿尔法狗系统开发团队创始人戴密斯·哈萨比斯提出朝着“创造解决世界上一切问题的通用人工智能”这一目标前进。微软在2017年成立了通用人工智能实验室，
                        众多感知、学习、推理、自然语言理解等方面的科学家参与其中。
                        <br>
                    </p>
                    <p class="text">
                        右侧是我国最近一年人工智能关键芯片的发展情况。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj2"></Echart>
                </el-col>
            </el-row>
            <el-row class="row-container" style="min-height: 300px;">
                <el-col :span="24">
                    <Echart :option="optionObjhe"></Echart>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br><br><br>
                    <p class="text" style="text-indent: 2em;">
                        人类曾经梦想能像鸟儿那样在天空中飞翔，今天，载人飞船已
                        经在太空遨游；人类曾经梦想能像鱼儿那样在水中畅游，今天，潜
                        水技术已经能让我们深入海底……科技让梦想变成了现实
                    </p>
                    <p class="text" style="text-indent: 2em;">
                        我国航天事业从无到有、从小到大、从弱到强，以扎实的步伐和不懈的努
                        力，把航天梦写到外太空。1970年 4月 24日，我国第一颗人造地球卫星“东方
                        红一号”成功发射，拉开了中国人探索宇宙奥秘、和平利用太空、造福人类的
                        序幕。火箭研制、载人航天、嫦娥探月、
                        空间交会对接、导航卫星全球组网……中国航天事业取得了举世瞩目的成就。如今，
                        航天技术已广泛应用到广播电视、通信、气象预报、国土普查、海洋观测、导航定
                        位、防灾减灾、远程教育、农业生产、环
                        境监测等国民经济和社会发展的各个领域。
                        <br>
                    </p>
                    <p class="text">
                        右侧是我国最近一年的航空航天发展情况。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj4"></Echart>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <br><br><br><br><br><br><br>
            </el-row>
        </el-main>
    </div>

</template>

<script setup lang="ts">
import Echart from '@/components/Echart.vue';
import { EChartsOption, number } from "echarts";
import { onMounted, ref, Ref, unref } from "vue";
const optionObj = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '2023年12月',
                '2023年11月',
                '2023年10月',
                '2023年9月',
                '2023年8月',
                '2023年7月',
                '2023年6月',
                '2023年5月',
                '2023年4月',
                '2023年3月'
            ],
            name: '时间'
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '新能源汽车产量当期值(万辆)',
            type: 'bar',
            stack: 'Bd',
            emphasis: {
                focus: 'series'
            },
            data: [114.1, 100.6, 92.7, 84.7, 80, 75.2, 74.9, 67.5, , 58.6, 66, 8]
        },
        {
            name: '新能源汽车产量累计值(万辆)',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [944.3, 804.9, 699.8, 609, 515.7, 435.8, 361.1, 284.6, 215.7, 162.9]
        },
        {
            name: '新能源汽车产量同比增长(%)',
            type: 'bar',
            stack: 'Bd',
            emphasis: {
                focus: 'series'
            },
            data: [43.7, 35.6, 27.9, 12.5, 13.8, 24.9, 27.6, 43.6, 85.4, 33.3]
        },
        {
            name: '新能源汽车产量累计增长(%)',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
                focus: 'series'
            },
            data: [30.3, 27.7, 26.7, 26.7, 29.6, 33.2, 35, 37, 32.8, 22.5]
        },
    ]
};
const optionObj2 = {
    title: {
        text: '2022年中国人工智能芯片市场的规模占比',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: ['GPU', 'NPU', 'ASIC', 'FPGA']
    },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {
                    value: 89,
                    name: 'GPU',
                    label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|厂家}{rateHead|占比}',
                            '{hr|}',
                            '  NVIDIA{rate|88%}',
                            '  AMD{rate|8%}',
                            '  Intel{rate|4%}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                width: 40,
                                align: 'right',
                                padding: [0, 10, 0, 0]
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'right',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                { value: 9.6, name: 'NPU' },
                { value: 1, name: 'ASIC' },
                { value: 0.8, name: 'FPGA' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
const optionObj3 = {
    title: {
        text: '新车自动驾驶搭载率'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.02],
        axisLabel: {
            formatter: '{value}%',
            interval: 1
        }
    },
    yAxis: {
        type: 'category',
        data: ['无自动驾驶', 'L1', 'L2', 'L3', 'L4'],
        inverse: true
    },
    series: [
        {
            name: '搭载率',
            type: 'bar',
            data: [11, 23, 35, 20, 11]
        }
    ]
};




</script>

<style scoped>
.col-container-chart {
    position: relative;
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-container {
    position: relative;
    min-height: 2000px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.row-container {
    flex-grow: 1;
    align-items: stretch;
}
</style>
