<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommendsitem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecomend",
    props: {
      recommends : {
        type: Array,
        default() { 
          return []
        }
      }
    }
  }
</script>

<style  scoped>
  .recommends{
    display: flex;
    width: 100%;
  }
  .recommendsitem{
    flex : 1;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom : 5px solid rgb(221, 215, 215);
    transition : all 0.3s linear;
  }
  .recommendsitem:hover {
    transform : scale(1.05);
  }
  .recommendsitem img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }

</style>