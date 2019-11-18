<template>
    <header class="head-nav">
        <el-row>
            <el-col :span="6" class='logo-container'>
                <img src="../assets/logo.png" class='logo' alt="">
                <span class='title'>Miya在线后台管理系统</span>
            </el-col>
            <el-col :span="6">
                <div class="userInfo">
                    <span>欢迎</span>
                    <span>Miya</span>
                </div>
            </el-col>
        </el-row>
    </header>
</template>
<script>
export default {
    name:'header-nav'
}
</script>
<style>
    .head-nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #324057;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }
    .logo-container {
        line-height: 60px;
        min-width: 400px;
    }
    .logo {
        height: 50px;
        width: 50px;
        margin-right: 5px;
        vertical-align: middle;
        display: inline-block;
    }
</style>

