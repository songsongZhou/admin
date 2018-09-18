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
          action="/uploadImage"
          list-type="picture-card"
          :before-upload="handleBeforeUpload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>

        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

      </el-form-item>

      <el-form-item label="添加商品">
        <el-button type="primary" @click="dialogFormVisible = true">添加子商品</el-button>

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
        {{goodsForm+skuTableData}}{{dialogImageUrl}}
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>


    <!--添加商品sku的弹窗-->
    <el-dialog title="添加商品规格" :visible.sync="dialogFormVisible">
      <el-form :model="skuForm">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="skuForm.skuName"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="skuForm.skuPrice"></el-input>
        </el-form-item>
        <el-form-item label="划线价格" :label-width="formLabelWidth">
          <el-input v-model="skuForm.skuLinePrice"></el-input>
        </el-form-item>
        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input v-model="skuForm.stock"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--添加商品sku的弹窗-->

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
          categoryId:'',
          goodsImage:'https://wx2.sinaimg.cn/mw690/67ffebf6gy1fuvg4divyyj21sg2ds7wl.jpg',
          price:'4999'

        },
        formLabelWidth:'200',
        dialogFormVisible:false,
        dialogImageUrl: '',
        dialogVisible: false,
        skuForm:{
          skuName:'',
          skuPrice:'',
          skuLinePrice:'',
          skuCode:'',
          stock:'',
          skuImage:'',
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
      },
      addSKU:function () {

      },
      handleBeforeUpload(file,fileList){
        console.log(file, fileList);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }

    }
  }
</script>

<style scoped>

</style>
