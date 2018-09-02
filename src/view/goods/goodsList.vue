<template>
<div>
  <!--查询-->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="分类名称">
      <el-input v-model="formInline.name" placeholder="昵称"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="">添加商品</el-button>
    </el-form-item>
  </el-form>

</div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
