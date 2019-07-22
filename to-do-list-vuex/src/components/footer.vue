<template>
<div>
     <ul id="filters">
        <li>
             <a @click="all" >ALL</a>
         </li>
         <li>
             <a @click="active" >Active</a>
        </li>
        <li>
            <a @click="complete">Complete</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['licontent','liindex'],
  data(){
   return{
     msg:'',
     list:[],
     showList:[]
   }
 },
 methods:{
    complete(){
       this.$store.commit('complete')
    },
    active(){
      this.$store.commit('active')
    },
    all(){
       this.$store.commit('all')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>