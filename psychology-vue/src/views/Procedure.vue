<template>
  <div class="procedure-container">
    <div class="procedure-title">项目流程展示</div>
    <img src="@/assets/imgs/Procedure.png" alt="项目流程图" class="procedure-img">
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(120deg, #f5f8fd 60%, #e6f7f3 100%);
}
.procedure-container {
  max-width: 1000px;
  margin: 48px auto;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 32px rgba(80,120,255,0.10);
  padding: 32px 32px 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.procedure-title {
  font-size: 2rem;
  color: #1abc9c;
  font-weight: bold;
  margin-bottom: 32px;
  letter-spacing: 2px;
}
.procedure-img {
  max-width: 100%;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(80,120,255,0.08);
  background: #f5f8fd;
}
@media (max-width: 700px) {
  .procedure-container {
    padding: 12px 4px 18px 4px;
  }
  .procedure-title {
    font-size: 1.2rem;
    margin-bottom: 18px;
  }
}
</style> 