<template>
  <div>
    <el-form ref="goodsForm" :model="goodsForm" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="goodsForm.goodsName"></el-input>
      </el-form-item>

      <el-form-item label="商品标题">
        <el-input v-model="goodsForm.goodsSubName"></el-input>
      </el-form-item>

      <el-form-item label="分类">
        <el-select v-model='goodsForm.categoryId' placeholder="请选择">
          <el-option
            v-for="item in categoryData"
            :key="item.id"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品图片">
        <el-upload
          action="#"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>

      </el-form-item>

      <el-form-item label="添加商品">
        <el-table
        :data="skuTableData"
        border>
          <el-table-column prop="skuName" label="sku名称">
          </el-table-column>
          <el-table-column prop="skuPrice" label="价格">
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        {{goodsForm+skuTableData}}
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getCategorys,addOrUpdateGoods} from "../../axios/api";

  export default {
    data() {
      return {
        categoryData:[],
        goodsForm: {
          goodsName: '乐宜嘉厨房电器',
          goodsSubName: '9.1号至10号，预付200定金可享受双重优惠',
          categoryId:'1',
          goodsImage:'https://wx2.sinaimg.cn/mw690/67ffebf6gy1fuvg4divyyj21sg2ds7wl.jpg',
          price:'4999'

        },
        skuTableData:[{
          skuName:'白色128港版',
          skuPrice:12.8,
          skuImage:'https://wx2.sinaimg.cn/mw690/67ffebf6gy1fuvg4divyyj21sg2ds7wl.jpg'
        },{
          skuName:'白色128港版',
          skuPrice:12.8,
          skuImage:'https://wx2.sinaimg.cn/mw690/67ffebf6gy1fuvg4divyyj21sg2ds7wl.jpg',
        },{
          skuName:'白色128港版',
          skuPrice:12.8,
          skuImage:'https://wx2.sinaimg.cn/mw690/67ffebf6gy1fuvg4divyyj21sg2ds7wl.jpg',
        }],
        goodsVo:{
          goods:{},
          goodsSkus:[]
        },
      }
    },
    created() {
      getCategorys(1).then(res=>{
        this.categoryData=res.data.records
      })
    },
    methods: {
      onSubmit() {
        this.goodsVo.goods=this.goodsForm
        this.goodsVo.goodsSkus=this.skuTableData

        console.log('传参',this.goodsVo)
        console.log('submit!',JSON.stringify(this.goodsVo));

        addOrUpdateGoods(this.goodsVo).then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
