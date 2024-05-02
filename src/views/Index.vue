<template>
    <div class="container">
        <el-main class="main-container">
            <el-row class="row-container">
                <el-carousel type="card" height="475px" interval="2000" style="width: 100%;align-items: stretch;">
                    <el-carousel-item v-for="item in car_items" :key="item.index">
                        <router-link :to="item.link">
                            <el-image :src="item.src"></el-image>
                            <h1 style="text-align: center;position: relative; top: -70px;">{{
                        item.content
                    }}</h1>
                        </router-link>
                    </el-carousel-item>
                </el-carousel>
            </el-row>
            <el-row class="row-container">
                <el-col :span=12 class="col-container-chart">
                    <el-image src="src/assets/Education.png"></el-image>
                    <el-divider></el-divider>
                    <el-link></el-link>
                </el-col>
                <el-col :span=11 :offset=1 class="co-container-content">
                    <br>
                    <h1 style="flex: 1.5; margin-top: 2px; margin-bottom: 5px;font-family: STXingkai">教育</h1>
                    <p style="flex: 8; margin-bottom: 3px;font-size: larger">
                        <br><br>
                        教育出现于人类社会之初，起源于社会劳动，为适应传授生产劳动和社会生活经验的需要而产生。
                        教育是人类社会发展的动力和基础。人类社会的每一次跨越式发展都伴随着相应的教育大革命。
                        教育对我国发展至关重要，左侧是我国2003年至2022年国家教育公共财政支出数据概述。
                        <br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=24 :offset=0>
                            <el-button size="small">
                                <router-link :to="car_items[0].link" class="router-link-active">
                                    查看更多
                                </router-link>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
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
                            <el-button size="small">
                                <router-link :to="car_items[1].link" class="router-link-active">
                                    查看更多
                                </router-link>
                            </el-button>
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
                        <br>
                        健康是指一个人在身体、精神和社会等方面都处于良好的状态。
                        健康包括两个方面的内容：一是主要脏器无疾病，身体形态发育良好，体形均匀，人体各系统具有良好的生理功能，
                        有较强的身体活动能力和劳动能力，这是对健康最基本的要求；
                        二是对疾病的抵抗能力较强，能够适应环境变化，各种生理刺激以及致病因素对身体的作用。
                        传统的健康观是“无病即健康”，现代人的健康观是整体健康，世界卫生组织提出“健康不仅是躯体没有疾病，还要具备心理健康、社会适应良好和有道德”。
                        因此，现代人的健康内容包括：躯体健康、心理健康、心灵健康、社会健康、智力健康、道德健康、环境健康等。
                        健康是人的基本权利。健康是人生的第一财富。
                        左侧是一项有关健康数据调查的报告。

                        <br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=3 :offset=21>
                            <el-button size="small">
                                <router-link :to="car_items[2].link" class="router-link-active">
                                    查看更多
                                </router-link>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="row-container">
                <el-col :span=12 class="col-container-chart">
                    <el-image src="src/assets/Peace.png"></el-image>
                    <el-divider></el-divider>
                    <el-link></el-link>
                </el-col>
                <el-col :span=12 class="co-container-content">

                    <h1 style="flex: 1.5; margin-top: 2px; margin-bottom: 5px;font-family: STXingkai">和平</h1>
                    <p style="flex: 8; margin-bottom: 3px;font-size: larger;">
                        <br>
                        20世纪90年代，冷战的结束导致一个全新的世界安全环境的形成，其主要特点是，爆发的战争主要是国家内部战争，而不是国家间战争。
                        21世纪初出现了新的全球性威胁。2001年9月11日针对美国发动的恐怖袭击清楚地表明，国际恐怖主义已对国际社会发起挑战，
                        而随后发生的事件更加重了人们对核武器的扩散及来自其他非常规武器危险的担忧，给全世界人民的生活投上了一层阴影。
                        联合国系统的各个机构和组织立即动员起来，在各自的职权范围内迅速采取了打击恐怖主义的行动。
                        头戴蓝色头盔的联合国维持和平人员是联合国和平努力最显眼的标志。
                        这些维持和平人员是在自愿的基础上从各国军队选拔出来的军人，他们发挥着不偏不倚的第三方作用。
                        他们帮助实现并维持停火，并在冲突方之间构成一个缓冲区。他们的存在使通过外交渠道谋求和平解决冲突成为可能。
                        维持和平人员在当地维持和平的时候，联合国的调解人员则会与冲突各方或各国的领导人举行会谈，力争达成和平解决方案。
                        <br><br><br><br>
                    </p>
                    <el-row style="align-items: stretch;">
                        <el-col :span=3 :offset=21>
                            <el-button size="small">
                                <router-link :to="car_items[3].link" class="router-link-active">
                                    查看更多
                                </router-link>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <span style="text-align: center; display: flex; min-height: 10px;"></span>
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
    {
        src: "https://cdn.pixabay.com/photo/2016/04/13/22/12/hands-1327811_1280.jpg",
        link: '/health',
        index: 2,
        content: "健康"
    },
    {
        src: "https://cdn.pixabay.com/photo/2018/05/24/09/39/dove-3426159_1280.jpg",
        link: '/peace',
        index: 3,
        content: "和平"
    }
]
</script>

<style scoped>
.container {
    padding: 5px;
}

.main-container {
    padding: 0%;
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

.router-link-active {
    text-decoration: none;
}
</style>
