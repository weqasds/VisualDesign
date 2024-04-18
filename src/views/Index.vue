<template>
    <div class="container">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-carousel type="card" style="width: 100%;min-height: 550px;align-items: stretch; ">
                    <el-carousel-item v-for="item in car_items" :key="item.index" style="min-height: 550px;">
                        <router-link :to="item.link" class="el-car-item">
                            <el-image :src="item.src"></el-image>
                            <h1 style="text-align: center;position: relative;top: -50px;">{{ item.index }}{{
                        item.content
                    }}</h1>
                        </router-link>
                    </el-carousel-item>
                </el-carousel>
            </el-row>
            <!--<el-row class="row-container">
                <el-col :span=12 class="col-container-chart">
                    <el-image src="src/assets/Education.png"></el-image>
                    <el-divider></el-divider>
                    <el-link></el-link>
                </el-col>
                <el-col :span=11 :offset=1 class="co-container-content">
                    <h1 style="flex: 1.5; margin-top: 2px; margin-bottom: 5px;font-family: STXingkai">教育</h1>
                    <p style="flex: 8; margin-bottom: 3px;font-size: larger">
                        <br>
                        教育出现于人类社会之初，起源于社会劳动，为适应传授生产劳动和社会生活经验的需要而产生。
                        教育是人类社会发展的动力和基础。人类社会的每一次跨越式发展都伴随着相应的教育大革命。
                        教育对我国发展至关重要，左侧是我国2003年至2022年国家教育公共财政支出数据概述。
                        <br><br><br><br><br>
                        <br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=24 :offset=0>
                            <el-button size="small">查看更多</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>-->
            <span style="text-align: center; display: flex; min-height: 50px;"></span>
            <el-row class="row-container">
                <el-col :span=11 class="co-container-content">
                    <h1 style="flex: 1.5; margin-top: 2px; margin-bottom: 5px; font-family: STXingkai">科技</h1>
                    <p style="flex: 8; margin-bottom: 3px;font-size: larger;">
                        <br><br><br>
                        继 ChatGPT 发布后，大模型逐渐走入公众视野，在随后的时间内中国本土厂
                        商积极跟进，相继推出基于大模型的 AI 应用产品。由于在某些行业中，行
                        业知识和专业术语的使用非常独特，且涉及到十分复杂的数据和业务逻辑，
                        因此需要特定的行业大模型以更好满足行业需求。

                        <br><br><br><br><br>
                        <br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=3 :offset=21>
                            <el-button size="small">了解更多</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span=12 class="col-container-chart" :offset="1">
                    <el-image src="src/assets/LLM.png"></el-image>
                    <el-divider></el-divider>
                    <el-link></el-link>
                </el-col>
            </el-row>
            <span style="text-align: center; display: flex; min-height: 50px;"></span>
            <el-row class="row-container">
                <el-col :span=12 class="col-container-chart">
                    <el-image src="src/assets/Health.png"></el-image>
                    <el-divider></el-divider>
                    <el-link></el-link>
                </el-col>
                <el-col :span=12 class="co-container-content">
                    <h1 style="flex: 1.5; margin-top: 2px; margin-bottom: 5px;font-family: STXingkai">健康</h1>
                    <p style="flex: 8; margin-bottom: 3px;font-size: larger;">
                        <br><br><br>
                        健康是指一个人在身体、精神和社会等方面都处于良好的状态。
                        健康包括两个方面的内容：一是主要脏器无疾病，身体形态发育良好，体形均匀，人体各系统具有良好的生理功能，
                        有较强的身体活动能力和劳动能力，这是对健康最基本的要求；
                        二是对疾病的抵抗能力较强，能够适应环境变化，各种生理刺激以及致病因素对身体的作用。
                        传统的健康观是“无病即健康”，现代人的健康观是整体健康，世界卫生组织提出“健康不仅是躯体没有疾病，还要具备心理健康、社会适应良好和有道德”。
                        因此，现代人的健康内容包括：躯体健康、心理健康、心灵健康、社会健康、智力健康、道德健康、环境健康等。
                        健康是人的基本权利。健康是人生的第一财富。
                        左侧是一项有关健康数据调查的报告。

                        <br><br><br><br><br>
                        <br><br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=3 :offset=21>
                            <el-button size="small">了解更多</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <span style="text-align: center; display: flex; min-height: 50px;"></span>
        </el-main>
    </div>
</template>



<script setup>
const car_items = [
    {
        src: "https://cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_1280.jpg",
        link: '/education',
        index: 0,
        content: "教育"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/09/11/09/53/industry-2738423_1280.jpg",
        link: '/keji',
        index: 1,
        content: "科技"
    },
    //{
    //    src: "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
    //    link: '/health',
    //    index: 2,
    //    content: "健康"
    //},
    {
        src: "https://cdn.pixabay.com/photo/2018/05/24/09/39/dove-3426159_1280.jpg",
        link: '/peace',
        index: 3,
        content: "和平"
    }
]
</script>

<style scoped>
.conntain {
    padding: 5px;
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
    display: flex;
    align-items: stretch;
}

.col-container-chart {
    align-content: center;
    flex-direction: column;
    align-items: center;
}

.col-container-content {
    display: flex;
    flex-direction: column;
}

.el-car-item {
    align-items: stretch;
    display: flex;
    flex-direction: column;
}
</style>
