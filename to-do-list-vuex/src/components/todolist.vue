<template>
<div class="container">
    <heads></heads>
    <items></items>
    <foot></foot>
    <router-view></router-view>
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
    this.$store.dispatch('getlist')
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
