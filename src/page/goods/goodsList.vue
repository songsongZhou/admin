<template>
  <div>
    <!--查询-->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="分类名称">
        <el-input v-model="formInline.name" placeholder="类名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">添加商品</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData">
      <el-table-column label="商品名称" prop="goodsName"></el-table-column>
      <el-table-column label="商品描述" prop="goodsSubName"></el-table-column>
      <el-table-column label="图片" prop="goodsImage"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {getGoods} from "../../axios/api";

  export default {
    data() {
      return {
        tableData: [],
        formInline:{
          name:''
        }
      }
    },
    created() {
      this.getData(1)
    },
    methods:{
      getData:function (current) {
        getGoods(current).then(res=>{
          console.log(res)
          this.tableData=res.data.records
        })
      },
      onSubmit:function () {

      }
    }
  }
</script>

<style scoped>

</style>
