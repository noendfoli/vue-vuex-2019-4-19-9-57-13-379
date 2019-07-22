<template>
<div class="container">
    <heads></heads>
    <items></items>
    <foot></foot>
</div>
</template>

<script>
import items from './items'
import heads from './header'
import foot from './footer'


export default {
  name: 'HelloWorld',
  components:{
   heads,
   foot,
   items
 },
  created(){
    this.getHttp()
  },
  methods:{
    getHttp(){
      let destination =  "http://localhost:8080/todolists"
      this.$axios.get(destination).then((response)=>{
        this.$store.commit("getData",response.data)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
