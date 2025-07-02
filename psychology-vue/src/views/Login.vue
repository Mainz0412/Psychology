<template>
  <div class="container">
    <div class="left-illustration">
      <img :src="logo" alt="logo" class="login-logo" />
    </div>
    <div class="right-login">
      <h2>心愈心理健康服务云平台</h2>
      <div class="login-box">
        <div class="avatar"></div>
        <form @submit.prevent>
          <div class="form-group">
            <label for="account-type">账号类型</label>
            <select id="account-type">
              <option>普通用户</option>
              <option>管理员</option>
            </select>
          </div>
          <div class="form-group">
            <input type="text" placeholder="请输入账号" required>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入密码" required>
          </div>
          <div class="form-group captcha-group">
            <input type="text" placeholder="请输入验证码" required>
            <canvas ref="canvasRef" class="captcha-img" width="80" height="32" title="点击更换验证码" @click="refreshCaptcha"></canvas>
          </div>
          <div class="form-group forgot-group">
            <a href="#" class="forgot">忘记密码？</a>
          </div>
          <button type="submit" class="login-btn">登录</button>
        </form>
      </div>
      <div class="footer">
        浙ICP备2025000001号<br>
        版权所有©宁波大学教师教育学院
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/imgs/logo.png'

const captchaText = ref('')
const canvasRef = ref(null)

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  captchaText.value = ''
  for (let i = 0; i < 4; i++) {
    captchaText.value += chars.charAt(Math.floor(Math.random() * chars.length))
  }
}

function drawCaptcha() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = '20px Arial'
  ctx.fillStyle = '#333'
  ctx.fillText(captchaText.value, 10, 24)
}

function refreshCaptcha() {
  generateCaptcha()
  drawCaptcha()
}

onMounted(() => {
  refreshCaptcha()
})
</script>

<style scoped>
@import '../assets/css/style.css';
</style> 