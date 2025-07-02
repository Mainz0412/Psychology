<template>
  <div class="profile-container">
    <aside class="profile-sidebar">
      <ul class="profile-menu">
        <li class="active">家庭信息</li>
        <li>学业状况</li>
        <li>社会活动</li>
        <li>心理测评</li>
        <li>预警等级</li>
        <li>评估历史</li>
      </ul>
    </aside>
    <main class="profile-main">
      <form class="profile-form">
        <div class="profile-form-grid">
          <div class="form-group">
            <label>姓名</label>
            <input type="text" value="张三" readonly>
          </div>
          <div class="form-group">
            <label>性别</label>
            <select disabled><option>男</option><option>女</option></select>
          </div>
          <div class="form-group">
            <label>学校</label>
            <input type="text" value="某某中学" readonly>
          </div>
          <div class="form-group">
            <label>年级</label>
            <input type="text" value="高一" readonly>
          </div>
          <div class="form-group">
            <label>手机号</label>
            <input type="text" value="138****8888" readonly>
          </div>
          <div class="form-group">
            <label>身份证号</label>
            <input type="text" value="3302********1234" readonly>
          </div>
        </div>
        <div class="profile-form-right">
          <div class="avatar-upload">
            <img class="profile-avatar" src="https://img.icons8.com/color/120/000000/user-male-circle--v2.png" alt="avatar">
            <button type="button" class="upload-btn">上传头像</button>
          </div>
        </div>
      </form>
      <div class="profile-content profile-info-cards">
        <div class="profile-card">
          <label>风险等级</label>
          <textarea readonly>中等风险</textarea>
        </div>
        <div class="profile-card">
          <label>风险点提示</label>
          <textarea readonly>存在学业压力、家庭沟通不足等风险点。</textarea>
        </div>
        <div class="profile-card">
          <label>干预措施</label>
          <textarea readonly>建议定期心理咨询，家校联合关注学生心理健康。</textarea>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/profile.css';

.profile-form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 24px 32px;
  width: 100%;
  margin-bottom: 24px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 8px;
  color: #16a085;
  font-weight: 500;
}
.form-group input,
.form-group select {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  background: #f8fafd;
  color: #333;
}
</style> 