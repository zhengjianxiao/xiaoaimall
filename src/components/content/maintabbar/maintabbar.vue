<template>
  <div>
    <tabbar>
        <tabbaritem path = "/home">
           <img slot="tabbaractive" src="~@/assets/img/tabbar/home_active.svg" alt />
          <img slot="tabbarimg" src="~@/assets/img/tabbar/home.svg" alt />
          <div slot="tabbartext">首页</div>
        </tabbaritem>
        <tabbaritem path = "/catgrory">
          <img slot="tabbarimg" src="~@/assets/img/tabbar/category.svg" alt />
          <img slot="tabbaractive" src="~@/assets/img/tabbar/category_active.svg" alt />
          <div slot="tabbartext">分类</div>
        </tabbaritem>
        <tabbaritem path = "/shopcar">
          <img slot="tabbarimg" src="~@/assets/img/tabbar/shopcart.svg" alt />
          <img slot="tabbaractive" src="~@/assets/img/tabbar/shopcart_active.svg" alt />
          <div slot="tabbartext">购物车</div>
        </tabbaritem>
        <tabbaritem path = "/profile">
          <img slot="tabbarimg" src="~@/assets/img/tabbar/profile.svg" alt />
          <img slot="tabbaractive" src="~@/assets/img/tabbar/profile_active.svg" alt />
          <div slot="tabbartext">我的</div>
        </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/common/tabbar/tabbar.vue"
import tabbaritem from "@/components/common/tabbar/tabbaritem.vue"
  export default {
    name: "maintabbar",
    components : {
      tabbar,
      tabbaritem
    }
  }
</script>

<style  scoped>
</style>