<template>
  <div class="video-eval-container">
    <header class="video-eval-header">
      <h2>张三个人视频集</h2>
    </header>
    <div class="video-eval-main">
      <aside class="video-list">
        <h3>视频列表</h3>
        <ul>
          <li class="active">2024-05-23-课程1</li>
          <li>2024-05-23-课程2</li>
          <li>2024-05-23-课程3</li>
          <li>2024-05-24-课程1</li>
          <li>2024-05-24-课程2</li>
        </ul>
      </aside>
      <section class="video-eval-content">
        <div class="video-player-card">
          <video width="400" controls poster="https://dummyimage.com/400x225/cccccc/fff&text=Video+Preview">
            <source src="#" type="video/mp4">
            您的浏览器不支持 video 标签。
          </video>
        </div>
        <div class="analysis-card">
          <div class="analysis-left">
            <h3>张三课堂抬头率检测分析</h3>
            <p>本分析针对张三同学在课堂中的抬头率进行检测，以评估其专注度与课堂参与情况。通过对其上课视频的分析，统计了张三在不同时间段的抬头情况，并生成了抬头率曲线。</p>
            <ul>
              <li>检测对象：张三同学</li>
              <li>分析内容：个体抬头/低头状态识别，抬头率统计</li>
              <li>评估目的：了解个体专注度，为个性化辅导提供参考</li>
            </ul>
            <div class="analysis-conclusion">
              <b>结论示例：</b> 根据检测结果，张三同学本节课平均抬头率为 <span class="highlight">46.51%</span>，课堂专注度有待提升。
            </div>
          </div>
          <div class="analysis-right">
            <img src="@/assets/imgs/Head_up_rate.png" alt="课堂抬头率分析图" class="headup-img">
            <div class="img-caption">课堂抬头率分析结果</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/video_evaluation.css';
</style> 