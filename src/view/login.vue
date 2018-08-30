<template>
  <div class="container">
      <el-card class="box-card">
      <el-form label-position="top" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </el-card>
  </div>
</template>

<script>

  import {login} from "../api/getData";

  export default {
      data() {
        return {
          ruleForm: {
            name: '',
            password:''
          },
          rules:{
            name: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            ]
          }
        }
      },
      methods: {
         submitForm(formName) {
          var that=this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(res)
              return false;
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .container{
    background-color: #F56C6C;
    height: 100%;
    width: 100%;
    position: absolute;

  }
  .box-card{
    margin: 0 auto;
    width: 480px;
    top: 30%;
    position: relative;
  }
</style>
