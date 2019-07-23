<template>

            <div>
               <input type="text" v-model="msg"><button @click="startUse">开始使用</button>
            </div>

</template>

<script>
export default {
  data(){
      return{
          msg:""
      }
  },
  methods:{
      startUse(){
          this.$router.push({name:"home",params:{username:this.msg}})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>