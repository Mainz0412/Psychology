<template>
  <div class="report-container">
    <header class="report-header">
      <h1>综合评估报告</h1>
      <div class="report-meta">
        <span>辅导时间：2025-03-10 15:00:00</span>
        <span>用时：24分钟</span>
      </div>
    </header>
    <nav class="report-tabs">
      <span class="tab active">情绪评估</span>
      <span class="tab">学业评估</span>
      <span class="tab">社会适应评估</span>
    </nav>
    <section class="report-section">
      <div class="section-title">综合情绪状态</div>
      <div class="emotion-bars">
        <div class="bar-label">焦虑</div>
        <div class="bar-bg"><div class="bar-fill bar-anxious" style="width: 50%">50%</div></div>
        <div class="bar-label">抑郁</div>
        <div class="bar-bg"><div class="bar-fill bar-depress" style="width: 20%">20%</div></div>
        <div class="bar-label">愉悦</div>
        <div class="bar-bg"><div class="bar-fill bar-happy" style="width: 80%">80%</div></div>
      </div>
      <div class="emotion-desc">
        <b>AI解读：</b>你的情绪状态整体较为积极，愉悦感较高，焦虑和抑郁水平较低。建议继续保持良好心态，遇到压力时及时寻求支持。
      </div>
    </section>
    <section class="report-section focus-dimensions">
      <div class="focus-card">
        <div class="focus-title">焦虑维度</div>
        <div class="focus-score">中等</div>
        <div class="focus-desc">你在本次测评中焦虑水平中等，说明你有一定的日常压力，但应对较好，继续保持！</div>
      </div>
      <div class="focus-card">
        <div class="focus-title">自我价值感</div>
        <div class="focus-score">正常</div>
        <div class="focus-desc">你对自己的评价较为积极，具备良好的自我认同感。</div>
      </div>
      <div class="focus-card">
        <div class="focus-title">愉悦维度</div>
        <div class="focus-score">高</div>
        <div class="focus-desc">你在本次测评中愉悦感较高，情绪积极向上。</div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/report.css';
</style> 