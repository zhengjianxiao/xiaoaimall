<template>
  <div class="tabnav">
    <div v-for="(item , index) in tabnavs"
     class="tabnavitem" 
    :class="{active:currentIndex === index}"
    @click="navitemclick(index)">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabnav",
    data() {
      return {
        currentIndex : 0
      }
    },
    props: {
      tabnavs : {
        type : Array,
        default() {
          return []
        }
      }
    },
    methods : {
      navitemclick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tabnav{
    display: flex;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabnavitem{
    flex : 1;
  }
  .tabnavitem span{
    padding : 5px;
  }
  .active{
    color : #FF699C;
  }
  .active span{
    border-bottom: 2px solid #FF699C;
  }
</style>