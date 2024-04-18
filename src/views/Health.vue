<template>
    <div style="padding: 5px">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-col :span="12">
                    <h1 style="margin-bottom: 40px; text-align: center; font-size: 35px;font-family: 宋体">健康</h1>
                    <p class="text" style="text-indent: 2em;">健康是指一个人在身体、精神和社会等方面都处于良好的状态。
                        健康包括两个方面的内容：
                        一是主要脏器无疾病，身体形态发育良好，体形均匀，人体各系统具有良好的生理功能，有较强的身体活动能力和劳动能力，这是对健康最基本的要求；
                        二是对疾病的抵抗能力较强，能够适应环境变化，各种生理刺激以及致病因素对身体的作用。
                        传统的健康观是“无病即健康”，现代人的健康观是整体健康，世界卫生组织提出“健康不仅是躯体没有疾病，还要具备心理健康、社会适应良好和有道德”。
                        因此，现代人的健康内容包括：躯体健康、心理健康、心灵健康、社会健康、智力健康、道德健康、环境健康等。
                        健康是人的基本权利。健康是人生的第一财富。
                    </p>
                </el-col>
                <el-col :span="12" class="img-container">
                    <el-image src="http://cvh.bmicc.cn/cvh/images/rt.png"></el-image>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br><br><br>
                    <p class="text" style="text-indent: 2em;">
                        医疗保险一般指基本医疗保险，是为了补偿劳动者因疾病风险造成的经济损失而建立的一项社会保险制度。
                        通过用人单位与个人缴费，建立医疗保险基金，参保人员患病就诊发生医疗费用后，由医疗保险机构对其给予一定的经济补偿。
                        基本医疗保险制度的建立和实施集聚了单位和社会成员的经济力量，再加上政府的资助，
                        可以使患病的社会成员从社会获得必要的物资帮助，减轻医疗费用负担，
                        防止患病的社会成员“因病致贫”。
                    </p>
                    <p class="text" style="text-indent: 2em;">
                        新中国成立70年以来，政府在医疗保险领域做了大量的努力，尤其是进入21世纪以来，
                        基本医疗保险制度实现了人群基本全覆盖，各项制度筹资水平和保障水平不断提高，
                        城镇居民医疗服务利用水平和健康水平明显提高。
                        中国基本医疗保险发展的基本经验可以表述为选择了社会保险的模式，遵循了全覆盖、保基本、多层次、
                        可持续的原则。
                        <br>
                    </p>
                    <p class="text">
                        右侧是我国最近五年的医疗保障情况。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj"></Echart>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=16 class="col-container-chart">
                    <Echart :option="optionObj2"></Echart>
                </el-col>
                <el-col :span=8>
                    <br><br><br><br>
                    <br><br>
                    <p class="text" style="text-indent: 2em;">
                        传染病〔Infectious Diseases〕是由各种病原体引起的能在人与人、动物与动物或人与动物之间相互传播的一类疾病。
                        中国目前的法定报告传染病分为甲、乙、丙3类，共41种。此外，还包括国家卫生计生委决定列入乙类、丙类传染病管理
                        的其他传染病和按照甲类管理开展应急监测报告的其他传染病。我国通过实施疫苗接种、药物治疗、病媒控制、健康教育
                        等综合防控措施，有效地防控了脊髓灰质炎、丝虫病、新生儿破伤风和疟疾的流行，并且分别于2000年、2007年、2012年
                        和2021年通过世界卫生组织认证消除了脊髓灰质炎、丝虫病、新生儿破伤风和疟疾。另外，血吸虫病消除已列入国家行动
                        计划，计划于2030年实现消除目标，近年来狂犬病、麻疹和风疹的发病持续保持较低水平，进入疾病消除前阶段。我国在
                        传染病的预防与消灭做出了非常大的贡献。
                    </p>
                    <p class="text">
                        左侧是我国最近五年的常见传染病发展情况。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>

                    <h1>空气污染是世界主要的死亡风险因素之一</h1>
                    <h3>空气污染每年造成数百万人死亡</h3>
                    <p class="text" style="text-indent: 2em;">
                        空气污染（室外和室内颗粒物和臭氧的结合）是许多主要死亡原因的危险因素，包括心脏病、中风、下呼吸道感染、肺癌、糖尿病和慢性阻塞性肺病 （COPD）。
                        健康计量与评估研究所（IHME）在其全球疾病负担研究中提供了归因于疾病危险因素范围的死亡人数的估计值。1
                        在可视化中，我们看到每年归因于每个风险因素的死亡人数。
                        此图表显示全球总数，但可以使用“更改国家/地区”切换开关浏览任何国家或地区。
                        空气污染是导致死亡的主要危险因素之一。
                        在低收入国家，它通常非常接近列表的顶部（或者是主要的风险因素）。
                    </p>
                    <p class="text">
                        右侧是2019年世界按风险因素划分的死亡人数
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <iframe src="https://ourworldindata.org/grapher/number-of-deaths-by-risk-factor?tab=chart"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <h1>2019年全球空气污染死亡率</h1>
            </el-row>
            <el-row class="row-container" style="min-height: 700px;">
                <el-col :span="24">
                    <iframe src="https://ourworldindata.org/grapher/share-deaths-air-pollution?tab=map" loading="lazy"
                        style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <br><br>
            </el-row>
        </el-main>
    </div>
</template>

<script setup lang="ts">
import Echart from '@/components/Echart.vue';
const optionObj = {
    title: [
        {
            text: '医疗保险基本情况',
            left: '26%',
            top: '3%'
        },
        {
            text: '城镇基本医疗保险基金收入(亿元)',
            left: '65.5%',
            top: '5%'
        },
        {
            text: '城镇基本医疗保险基金支出(亿元)',
            left: '65.5%',
            top: '51%'
        }
    ],
    xAxis: {
        type: 'category',
        data: ['2019', '2020', '2021', '2022', '2023']
    },
    grid: [
        {
            right: '45%',
            bottom: '15%'
        }
    ],

    legend: {
        show: true,
        type: 'scroll',
        top: 'bottom'
    },
    yAxis: [
        {
            type: 'value'
        },
        {
            type: 'value',
            max: 150000
        }
    ],
    dataZoom: [
        {
            type: 'inside',
            minSpan: 30,
            maxSpan: 100
        },
        {
            type: 'slider',
            xAxisIndex: 0,
            minSpan: 50,
            maxSpan: 100,
            bottom: '7%'
        },
        {
            right: '40%',
            type: 'slider',
            yAxisIndex: 0,
            minSpan: 30,
            maxSpan: 100
        }
    ],
    tooltip: {
        show: true
    },
    series: [
        {
            name: '基本医疗保险年末参保人数(万人)',
            data: [135407.4, 136131.1, 136296.7, 134592.5, 133387],
            type: 'bar'
        },
        {
            name: '城镇职工基本医疗保险年末参保人数(万人)',
            data: [32924.7, 34455.1, 35430.9, 36243.4, 37094],
            type: 'bar'
        },
        {
            name: '城镇在岗职工基本医疗保险年末参保人数(万人)',
            data: [24224.4, 25428.8, 26106.5, 26604.3, '-'],
            type: 'bar'
        },
        {
            name: '城镇退休人员基本医疗保险年末参保人数(万人)',
            data: [8700.4, 9026.3, 9324.4, 9639.1, '-'],
            type: 'bar'
        },
        {
            name: '城镇居民基本医疗保险年末参保人数(万人)',
            data: [102482.7, 101676, 100865.9, 98349.1, 96293],
            type: 'bar'
        },
        {
            name: '城镇基本医疗保险基金收入(亿元)',
            data: [24420.9, 24846.1, 28732, 30922.2, '-'],
            type: 'bar'
        },
        {
            name: '城镇职工医疗保险基金收入(亿元)',
            data: [15845.4, 15731.6, 19007.5, 20793.3, '-'],
            type: 'bar'
        },
        {
            name: '城镇居民医疗保险基金收入(亿元)',
            data: [8575.5, 9114.5, 9724.5, 10128.9, '-'],
            type: 'bar'
        },
        {
            name: '城镇基本医疗保险基金支出(亿元)',
            data: [20854.2, 21032.1, 24048.2, 24597.2, '-'],
            type: 'bar'
        },
        {
            name: '城镇职工医疗保险基金支出(亿元)',
            data: [12663.2, 12867, 14751.8, 15243.8, '-'],
            type: 'bar'
        },
        {
            name: '城镇居民医疗保险基金支出(亿元)',
            data: [8191, 8165.1, 9296.4, 9353.4, '-'],
            type: 'bar'
        },
        {
            name: '城镇基本医疗保险基金累计结余(亿元)',
            data: [27696.7, 31500, 36178.3, 42639.9, '-'],
            type: 'bar'
        },
        {
            name: '城镇在岗职工基本医疗保险年末参保人数(万人)',
            data: [22554.1, 25423.5, 29461.8, 35105.8, '-'],
            type: 'bar'
        },
        {
            name: '城镇居民医疗保险基金累计结余(亿元)',
            data: [5142.5, 6076.5, 6716.6, 7534.1, '-'],
            type: 'bar'
        },
        {
            type: 'pie',
            radius: [0, '40%'],
            center: ['80%', '30%'],
            label: {
                show: true,
                position: 'inside',
                formatter: (params) => {
                    //var arr=[
                    //  '{年份|`${params.name}`}',
                    //  '{占比|`${params.percent}`}'
                    //].join('\n');
                    //return arr
                    return '年份：' + `${params.name}` + '\n\n占比：' + `${params.percent}%`
                },
                color: 'black'
            },
            data: [
                { name: '2019年', value: 24420.9 },
                { name: '2020年', value: 24846.1 },
                { name: '2021年', value: 28732 },
                { name: '2022年', value: 30922.2 },
                { name: '2023年', value: '-' }
            ]
        },
        {
            type: 'pie',
            radius: [0, '40%'],
            center: ['80%', '75%'],
            label: {
                show: true,
                position: 'inside',
                formatter: (params) => {
                    //var arr=[
                    //  '{年份|`${params.name}`}',
                    //  '{占比|`${params.percent}`}'
                    //].join('\n');
                    //return arr
                    return '年份：' + `${params.name}` + '\n\n占比：' + `${params.percent}%`
                },
                color: 'black'
            },
            data: [
                { name: '2019年', value: 20854.2 },
                { name: '2020年', value: 21032.1 },
                { name: '2021年', value: 24048.2 },
                { name: '2022年', value: 24597.2 },
                { name: '2023年', value: '-' }
            ]
        }
    ]
};
const optionObj2 = {
    tooltip: { show: true },
    title: [
        {
            text: '常见传染病发病人数',
            left: '24%',
            top: '5%'
        },
        {
            text: '常见传染病死亡人数',
            left: '24%',
            bottom: '1%'
        },
        {
            text: '常见传染病发病率',
            left: '71%',
            top: '15%'
        }
    ],
    grid: [
        {
            bottom: '55%',
            right: '45%'
        },
        {
            bottom: '5%',
            top: '60%',
            right: '45%'
        }
    ],
    legend: [
        {
            type: 'scroll',
            width: '45%',
            left: '9%',
            data: [
                '梅毒发病人数(人)',
                '艾滋病发病人数(人)',
                '狂犬病发病人数(人)',
                '病毒性肝炎发病人数(人)',
                '梅毒死亡人数(人)',
                '艾滋病死亡人数(人)',
                '狂犬病死亡人数(人)',
                '病毒性肝炎死亡人数(人)'
            ]
        },
        {
            type: 'scroll',
            width: '36%',
            left: '60%',
            data: [
                '梅毒发病率(1/10万)',
                '艾滋病发病率(1/10万)',
                '狂犬病发病率(1/10万)',
                '病毒性肝炎发病率(1/10万)'
            ]
        }
    ],
    dataZoom: [
        {
            xAxisIndex: 0,
            bottom: '50%',
            height: '12px'
        },
        {
            yAxisIndex: 0,
            width: '12px',
            right: '42%'
        },
        {
            type: 'inside',
            xAxisIndex: 0
        },
        {
            xAxisIndex: 1,
            bottom: '46%',
            height: '12px'
        },
        {
            yAxisIndex: 1,
            width: '12px',
            right: '42%'
        },
        {
            type: 'inside',
            xAxisIndex: 1
        }
    ],
    dataset: [
        {
            source: [
                ['指标', '2022年', '2021年', '2020年', '2019年'],
                ['梅毒发病人数(人)', 441159, 480020, 464435, 535819],
                ['艾滋病发病人数(人)', 52058, 60154, 62167, 71204],
                ['狂犬病发病人数(人)', 133, 157, 202, 290],
                ['病毒性肝炎发病人数(人)', 1105865, 1226165, 1138781, 1286691]
            ]
        },
        {
            source: [
                ['指标', '2022年', '2021年', '2020年', '2019年'],
                ['梅毒死亡人数(人)', 23, 30, 54, 42],
                ['艾滋病死亡人数(人)', 18885, 19623, 18819, 20999],
                ['狂犬病死亡人数(人)', 118, 150, 188, 276],
                ['病毒性肝炎死亡人数(人)', 543, 520, 588, 575]
            ]
        },
        {
            source: [
                ['指标', '2022年', '2021年', '2020年', '2019年'],
                ['梅毒发病率(1/10万)', 31.27, 34.05, 33.08, 38.37],
                ['艾滋病发病率(1/10万)', 3.69, 4.27, 4.43, 5.1],
                ['狂犬病发病率(1/10万)', 0.01, 0.01, 0.01, 0.02],
                ['病毒性肝炎发病率(1/10万)', 78.4, 86.98, 81.12, 92.13]
            ]
        }
    ],
    xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1, position: 'top' }
    ],
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            name: '发病人数'
        },
        {
            type: 'value',
            gridIndex: 1,
            inverse: true,
            name: '死亡人数'
        }
    ],
    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
    series: [
        {
            name: '梅毒发病人数(人)',
            type: 'bar',
            datasetIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'row'
        },
        {
            name: '艾滋病发病人数(人)',
            type: 'bar',
            datasetIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'row'
        },
        {
            name: '狂犬病发病人数(人)',
            type: 'bar',
            datasetIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'row'
        },
        {
            name: '病毒性肝炎发病人数(人)',
            type: 'bar',
            datasetIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'row'
        },
        {
            name: '梅毒死亡人数(人)',
            type: 'bar',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            name: '艾滋病死亡人数(人)',
            type: 'bar',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            name: '狂犬病死亡人数(人)',
            type: 'bar',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            name: '病毒性肝炎死亡人数(人)',
            type: 'bar',
            datasetIndex: 1,
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            type: 'pie',
            datasetIndex: 2,
            center: ['80%', '50%'],
            radius: '45%',
            tooltip: {
                show: true,
                trigger: 'item'
            },
            encode: {
                tooltip: [0, 1],
                value: '2022年',
                itemName: 0
            },
            label: {
                position: 'inside',
                formatter: `{@[0]}\n\n发病率:{@[1]}%`
            }
            //label:{
            //  position:'inside',
            //  formatter:(params)=>`${params.name}` + '\n\n占比：' + `${params.percent}%`
            //}
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
    display: flex;
    flex-direction: row;
}

.img-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: aquamarine;
    border-radius: 5%;
}

.text {
    font-size: larger;
    line-height: 180%;
}
</style>
