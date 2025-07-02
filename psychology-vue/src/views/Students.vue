<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="logo">心理云平台</div>
      <nav class="nav-menu">
        <a href="#">首页</a>
        <a href="#" class="active">学生信息管理</a>
        <a href="#">班级信息</a>
        <a href="#">系统管理</a>
      </nav>
    </aside>
    <main class="main-content">
      <header class="topbar">
        <span class="page-title">学生档案管理</span>
        <div class="user-info">
          <img src="https://img.icons8.com/color/48/000000/user-male-circle--v2.png" class="avatar" alt="avatar">
          <span class="user-name">管理员</span>
        </div>
      </header>
      <section class="filter-bar">
        <input type="text" placeholder="姓名" class="filter-input">
        <input type="text" placeholder="学号" class="filter-input">
        <select class="filter-input"><option>学校</option><option>一中</option><option>二中</option></select>
        <select class="filter-input"><option>班级</option><option>高一1班</option><option>高一2班</option></select>
        <select class="filter-input"><option>年级</option><option>高一</option><option>高二</option></select>
        <select class="filter-input"><option>状态</option><option>在读</option><option>毕业</option></select>
        <button class="btn btn-green">搜索</button>
        <button class="btn btn-gray">重置</button>
      </section>
      <section class="action-bar">
        <button class="btn btn-green">新增</button>
        <button class="btn btn-blue">修改</button>
        <button class="btn btn-red">删除</button>
        <button class="btn btn-green">导入</button>
        <button class="btn btn-orange">导出</button>
      </section>
      <section class="table-section">
        <table class="students-table">
          <thead>
            <tr>
              <th><input type="checkbox"></th>
              <th>登录账号</th>
              <th>姓名</th>
              <th>学号</th>
              <th>班级</th>
              <th>年级</th>
              <th>性别</th>
              <th>状态</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox"></td>
              <td>zhangsan</td>
              <td>张三</td>
              <td>2023123456</td>
              <td>高一1班</td>
              <td>高一</td>
              <td>男</td>
              <td>在读</td>
              <td></td>
              <td>
                <button class="btn btn-blue">编辑</button>
                <button class="btn btn-red">删除</button>
              </td>
            </tr>
            <!-- 可添加更多学生数据行 -->
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script setup>
// 预留后续逻辑
</script>

<style scoped>
@import '../assets/css/students.css';
</style> 