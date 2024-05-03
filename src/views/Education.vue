<template>
    <div style="padding: 5px">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-col :span="15">
                    <h1 style="font-size: 35px;font-family: 宋体">教育</h1>
                    <p style="text-indent: 2em; font-size: larger;line-height: 2.4rem;">
                        教育的定义方式决定着教育的定义内容。从哲学认识论角度分析，
                        教育的定义方式可以分为实在论定义方式和现象学定义方式。
                        教育的实在论定义方式把教育当作一个已经完成的实体或存在者，
                        教育定义是对实体的“符合”或趋近；
                        教育的现象学定义方式把教育当作一个正在发生的存在，
                        教育定义是定义者参与其中而生发出的对教育的认识。
                    </p>
                    <p style="text-indent: 2em; font-size: larger; line-height: 2.4rem;">
                        良好的教育为个人提供了过上更丰富、更有趣的生活的机会。在社会层面上，它为人类解决其紧迫问题创造了机会。
                        在过去的几个世纪里，世界经历了一个戏剧性的转变，从很少有人接受过任何基础教育到大多数人都接受过基础教育。
                        这不仅体现在对教育的投入（入学率和出勤率）上，还体现在识字率大大提高的成果上。
                    </p>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="8">
                    <el-image :src="EduMain"></el-image>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=8>
                    <br><br><br>
                    <h2>
                        世界在提高基础教育水平方面取得了重大进展
                    </h2>
                    <p class="text" style="text-indent: 2em;">
                        现在，受教育被视为一项基本权利——在许多情况下，政府有责任提供教育。
                        但正规教育是最近才出现的现象。在图表中，我们看到了接受过一些基础教育的成年人口（15岁以上的人）和没有接受过基础教育的人的比例。
                        在 1800 年代初期，只有不到五分之一的成年人接受过一些基础教育。教育是一种奢侈;在所有地方，它只对少数精英可用。
                        但你可以看到，这个份额已经急剧增长，以至于这个比例现在被逆转了。不到五分之一的成年人没有接受过任何正规教育。
                        这也反映在识字数据上：200年前，很少有人会读写。现在大多数成年人都具备基本的识字技能。
                    </p>
                </el-col>
                <el-col :span=16 class="col-container-chart">
                    <iframe
                        src="https://ourworldindata.org/grapher/share-of-the-world-population-with-at-least-basic-education?tab=chart"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=16 class="col-container-chart">
                    <!--<Echart :option="optionObj3"></Echart>-->
                    <iframe src="https://ourworldindata.org/grapher/learning-adjusted-years-of-school-lays?tab=map"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
                <el-col :span=8>
                    <br><br><br>
                    <h2>
                        世界各地的儿童接受的优质学习数量大不相同
                    </h2>
                    <p class="text" style="text-indent: 2em;">
                        世界各地儿童接受的教育量仍然存在严重的不平等。
                        这可以用儿童在学校度过的总年数来衡量。
                        然而，研究人员也可以调整教育质量，以估计他们接受了多少年的优质学习。
                        这是使用称为“学习调整的学校教育年限”的指标来完成的。
                        在地图上，您可以看到世界各地的巨大差异。在世界上许多最贫穷的国家，
                        儿童接受的学习调整学校教育不到三年。在大多数富裕国家，这超过10年。
                        在南亚和撒哈拉以南非洲的大多数国家（儿童比例最大的地方），优质学校的平均年限不到7年。
                    </p>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=24 class="col-container-chart">
                    <h2>
                        2022 年 15 岁学生数学平均成绩
                    </h2>
                    <!--<Echart :option="optionObj2"></Echart>-->
                    <iframe
                        src="https://ourworldindata.org/grapher/pisa-test-score-mean-performance-on-the-mathematics-scale?tab=map"
                        loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <br><br>
            </el-row>
        </el-main>
    </div>

</template>

<script setup lang="ts">
import EduMain from '@/assets/EduMain.png';
import Echart from '@/components/Echart.vue';
import { EChartsOption, number } from "echarts";
import { onMounted, ref, Ref, unref } from "vue";




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
