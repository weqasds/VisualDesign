<template>
  <el-container style="display: flex; flex-direction: column;align-items: stretch;">
    <el-header>
      <el-menu mode="horizontal" default-active="1" @select="handleSelect">
        <el-menu-item :index="`0`">
          <a href="https://www.un.org/zh/">
            <img style="width: 100px" src="/src/assets/Diqiu.svg" alt="Element logo">
          </a>
        </el-menu-item>
        <div style="flex-grow: 0.9;"></div>
        <el-menu-item v-for="(item, index) in items" :index="`${index}`">
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
    <el-footer class="footer" style="">
      <el-col :span="8">
        <a href="https://www.un.org/zh/">
          <img style="width: 150px;margin-top: 50px;" src="./assets/Diqiu.svg" alt="Element logo">
        </a>
        <h1 style="color: rgb(255, 255, 255);">
          “让世界更美好”
        </h1>
      </el-col>
      <el-col class="el-col" :span="8">
        <h2 style="color: rgb(255, 255, 255);">
          了解更多
        </h2>
        <a style="text-decoration: none; font-size: large;padding: 5px;" href="https://www.stats.gov.cn/">国家统计局</a>
        <a style="text-decoration: none; font-size: large;padding: 5px;" href="https://cn.vuejs.org/">vue官网</a>
        <a style="text-decoration: none; font-size: large;padding: 5px;" href="https://www.un.org/zh/">联合国</a>
        <a style="text-decoration: none; font-size: large;padding: 5px;" href="http://www.moe.gov.cn/">教育部</a>
      </el-col>
      <el-col :span="8">
        <h2 style="color: rgb(255, 255, 255);">© All Rights Reserved.
        </h2>
        <h3 style="color: rgb(255, 255, 255);">联系电话：18735140794</h3>
        <h3 style="color: rgb(255, 255, 255);">联系邮箱：2578533368@qq.com</h3>
      </el-col>
    </el-footer>
  </el-container>
</template>

<script setup>
import { inputEmits } from 'element-plus'
const handleSelect = (key, keyPath, item) => {

  console.log(key, item)
}
console.log(import.meta.url)
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
  {
    key: '/health',
    Title: "健康",
    Icon: "",
  },
  {
    key: '/peace',
    Title: "和平",
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
  padding: 0.5%;
}

.footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.footer .el-col {
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 42, 134, 0.386)
}

.footer .el-col a {
  color: rgb(255, 255, 255);
}

.footer .el-col a:hover {
  color: rgba(252, 227, 4, 0.745);
}
</style>