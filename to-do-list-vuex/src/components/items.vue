<template>
    <div>
            <input class="input-text" type="text" name="ListItem"  v-model="msg">
            <div id="button" @click="handleclick">Add</div>
   <br>
      <ol>
        <todo-item v-for="(item,index) of this.$store.state.showItems" :key="index" :licontent="item" 
        :itemindex="index"
       >
        </todo-item>
      </ol>
     </div>
</template>

<script >
import item from './item'
export default {
 components:{
   "todo-item":item
 },
 data(){
   return{
     msg:'',
   }
 },
 methods:{
   handleclick(){
     let item = {
        content: this.msg,
        isChecked: false
     }
     this.$store.commit('addItem',item)
     this.msg = ''
   },
 }
}
</script>
<style>
</style>
