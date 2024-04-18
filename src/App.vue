<template>
  <el-container>
    <el-header>
      <el-menu default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">
          <a href="https://www.un.org/zh/">
            <img style="width: 100px" src="./assets/Diqiu.svg" alt="Element logo">
          </a>
          </img>
        </el-menu-item>
        <div style="flex-grow: 0.9;"></div>
        <el-menu-item v-for="(item, index) in  items" :key="index" index={{index}}>
          <router-link :to="item.key">
            <el-icon color="black">
              <Menu />
            </el-icon>
            {{ item.Title }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
    <el-footer class="footer">
      2020151250 赵怡睿
    </el-footer>
  </el-container>
</template>

<script setup>
import { inputEmits } from 'element-plus'
const handleSelect = (key, keyPath, item) => {
  console.log(key, item)
}
const items = [
  {
    key: '/',
    Title: "主页",
    Icon: "",
  },
  {
    key: '/education',
    Title: "教育",
    Icon: "",
  },
  {
    key: '/keji',
    Title: "科技",
    Icon: "",
  },
  //{
  //  key: '/health',
  //  Title: "健康",
  //  Icon: "",
  //},
  {
    key: '/peace',
    Title: "时政",
    Icon: "",
  }
]
</script>
<style scoped>
.header {
  text-align: center;
}

.main {
  height: 100%;
  width: 100%;
  position: fixed;
  margin-top: 60px;
  margin-bottom: 60px;
  top: 0;
  left: 0;

}

.footer {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 45%;
  right: 45%;
}
</style>