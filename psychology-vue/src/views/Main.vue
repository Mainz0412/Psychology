<template>
  <div class="dashboard-container">
    <div class="header-bar">
      <nav class="header-row1 nav-menu">
        <div class="logo">心理云平台</div>
        <a href="#" class="active">主页</a>
        <a href="#">学生中心</a>
        <a href="#">心理测评</a>
        <a href="#">家庭信息集</a>
        <a href="#">绿色通道</a>
        <a href="#">预警中心</a>
        <a href="#">多模态语料库</a>
      </nav>
      <div class="header-row2">
        <div></div>
        <div class="header-right">
          <input type="text" class="search" placeholder="搜索...">
          <div class="user-info">
            <span class="user-name">管理员</span>
            <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" class="avatar" alt="avatar">
          </div>
        </div>
      </div>
    </div>
    <main class="main-content">
      <section class="dashboard-cards grid-layout">
        <div class="card">
          <h3>学生中心</h3>
        </div>
        <div class="card">
          <h3>心理测评</h3>
        </div>
        <div class="card">
          <h3>家庭信息集</h3>
        </div>
        <div class="card">
          <h3>绿色通道</h3>
        </div>
        <div class="card">
          <h3>预警中心</h3>
        </div>
        <div class="card">
          <h3>多模态语料库</h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/main.css';
</style> 