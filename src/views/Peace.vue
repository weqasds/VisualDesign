<template>
    <div style="padding: 5px">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-col :span="24">
                    <h1>和平</h1>
                    <p style="text-indent: 2em;">
                        我们热爱和平，但战争从未远离。20世纪前 50年发生过两次
                        世界大战，这两次世界大战给人类造成了巨大创伤。战争是一面镜子，
                        能够让人们认识到和平的珍贵。正义终将战胜邪恶，和平终将取代战争。
                    </p>
                    <p style="text-indent: 2em;">
                        自 1800 年以来，全世界有超过 3700 万人在积极参加战争中丧生。
                        如果还考虑到因战斗而死亡的平民、这些冲突造成的饥饿和疾病死亡人数的增加以及不被视为战争的较小冲突中的死亡人数，这个数字还会高得多。1
                        战争在许多其他方面也是可怕的：它们使人们的生活不安全，降低他们的生活水平，破坏环境，如果在拥有核武器的国家之间进行战争，可能会对人类构成生存威胁。
                        仅看新闻，就很难理解死于战争的人数是否比过去多或少。人们必须依靠精心收集的统计数据，以便随着时间的推移进行比较。
                        虽然每场战争都是一场悲剧，但数据表明，近几十年来在冲突中死亡的人数比20世纪大部分时间都要少。各国之间和内部也建立了更加和平的关系。
                        避免了多少战争，以及战争中死亡人数减少的趋势是否继续下去，取决于我们自己的行动。最近，中东、非洲和欧洲的冲突死亡人数有所增加，这凸显了这些趋势的未来是不确定的。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=24 class="col-container-chart">
                    <iframe
                        src="https://ourworldindata.org/explorers/countries-in-conflict-data?facet=none&Measure=Conflict+deaths&Conflict+type=All+armed+conflicts&Conflict+sub-type=Across+all+sub-types&country=AFG~ETH~SYR~UKR&hideControls=true&tab=map"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=16 class="col-container-chart">
                    <iframe src="https://ourworldindata.org/grapher/deaths-in-state-based-conflicts-by-region?tab=chart"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
                <el-col :span=8>
                    <br><br>
                    <h1>冲突死亡人数有所下降;正是在我们身上，这种趋势仍在继续</h1>
                    <p style="text-indent: 2em;">
                        近几十年来，死于冲突的人数比20世纪大部分时间都要少。
                        该图表显示，在第二次世界大战后的几年里，有数百万人死于冲突。
                        在1950年代下降到低得多的水平之后，冲突死亡人数在1970年代和1980年代再次激增。但这一次，他们每年死亡人数达到 300,000 人的峰值。
                        它们在1990年代下降到低得多的水平，并在此后的几十年中一直低于以前的峰值。
                        首先，该图表显示过去十年的死亡人数增加，最近埃塞俄比亚和乌克兰战争导致的死亡人数激增。世界各地区的趋势也各不相同：
                        亚洲和大洋洲的死亡人数急剧下降并保持在低位，但最近中东的死亡人数有所增加，非洲和欧洲的死亡人数飙升。
                        我们不能有信心的另一个原因是，冲突的最后期限每年都有很大的变化。
                        有些战争比其他战争更致命，因此一场致命的冲突可能会彻底改变这一趋势。研究人员使用统计测试从随机波动中判断实际趋势，但得出了不同的结论。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br>
                    <h1>国与国之间的关系变得更加和平</h1>
                    <p style="text-indent: 2em;">
                        研究人员认为，我们应该把和平不仅仅是没有暴力（称为消极和平），而应该把它想象成群体之间的持续合作甚至相互保护（积极和平）。
                        该图表显示了全球数据，这些数据使用这种区别将国家之间的双边关系分为不同程度的和平或敌对，此处表示为每种关系的份额。
                        国家之间的大多数关系的特点是消极和平和积极和平，这种和平进一步分裂为温暖的和平与安全共同体。
                        只有一小部分关系被归类为竞争。这些竞争被产生这些数据的研究人员分为较小或严重的竞争。

                    </p>
                    <p style="text-indent: 2em;">
                        我们还看到，国家之间的关系随着时间的推移而发生了变化：一个多世纪前的1900年，大多数国家没有对彼此使用暴力，
                        但没有一个国家有高度合作的关系。近20%的关系是偶尔或经常对彼此使用暴力的竞争对手。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <iframe
                        src="https://ourworldindata.org/grapher/peaceful-and-hostile-relationships-between-states?tab=chart"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
        </el-main>
    </div>
</template>

<script setup>
import Echart from '@/components/Echart.vue';
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
