<template>
  <div class="datasets-container">
    <header class="datasets-header">
      <h2>多模态语料库</h2>
    </header>
    <div class="datasets-main">
      <aside class="datasets-sidebar">
        <div class="search-bar">
          <input type="text" placeholder="搜索你想要的数据资源标签">
          <button>搜索</button>
        </div>
        <div class="tag-list">
          <span class="tag tag-green">月考成绩</span>
          <span class="tag tag-blue">测评数据</span>
          <span class="tag tag-orange">作文</span>
          <span class="tag tag-purple">食堂就餐情况</span>
          <span class="tag tag-yellow">睡眠时长</span>
          <span class="tag tag-pink">语音</span>
          <span class="tag tag-cyan">语调</span>
          <span class="tag tag-green">抬头率</span>
          <span class="tag tag-blue">攻击行为</span>
          <span class="tag tag-orange">互动频率</span>
          <span class="tag tag-purple">回答问题次数</span>
          <span class="tag tag-yellow">绘画作品</span>
        </div>
      </aside>
      <section class="datasets-content">
        <div class="dataset-card">
          <div class="dataset-title">文本集</div>
          <div class="dataset-tags">
            <span class="tag tag-green">文本集</span>
          </div>
          <div class="dataset-desc">月考成绩、测评数据、作文、食堂就餐情况、睡眠时长等文本数据，适用于心理健康风险评估与行为分析。</div>
          <div class="dataset-meta">来源：校内数据 | 更新时间：2025-05-30 | 浏览：120</div>
        </div>
        <div class="dataset-card">
          <div class="dataset-title">语音语料集</div>
          <div class="dataset-tags">
            <span class="tag tag-blue">语音语料集</span>
          </div>
          <div class="dataset-desc">收集学生语音、语调等音频数据，支持情感识别、语音行为分析等多模态心理健康研究。</div>
          <div class="dataset-meta">来源：录音采集 | 更新时间：2025-05-28 | 浏览：98</div>
        </div>
        <div class="dataset-card highlight-report">
          <div class="dataset-title">综合报告</div>
          <div class="dataset-tags">
            <span class="tag tag-yellow">综合报告</span>
          </div>
          <div class="dataset-desc">基于多模态数据的心理健康综合评估报告，支持一人一档案、风险等级判定等功能。</div>
          <div class="dataset-meta">来源：系统分析 | 更新时间：2025-05-18 | 浏览：65</div>
        </div>
        <div class="dataset-card">
          <div class="dataset-title">视频集</div>
          <div class="dataset-tags">
            <span class="tag tag-orange">视频集</span>
          </div>
          <div class="dataset-desc">课堂视频：抬头率、攻击行为、互动频率、回答问题次数等多维度行为分析。</div>
          <div class="dataset-meta">来源：教室监控 | 更新时间：2025-05-25 | 浏览：87</div>
        </div>
        <div class="dataset-card">
          <div class="dataset-title">图像集</div>
          <div class="dataset-tags">
            <span class="tag tag-purple">图像集</span>
          </div>
          <div class="dataset-desc">绘画作品、心理健康课收集等图像数据，辅助心理健康评估与个体画像。</div>
          <div class="dataset-meta">来源：学生作品 | 更新时间：2025-05-20 | 浏览：76</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/datasets.css';
</style> 