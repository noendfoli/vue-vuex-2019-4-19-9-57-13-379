<template>
            <div>
              <div>
                <span>{{username}}</span>
                <button @click="goback">go back</button>
                  <div>
                      <ul style="display:none">
                        <li>todolist</li>
                        <li></li>
                    </ul>
                  </div>
              </div>
              <div>
                  <todolist></todolist>  
              </div>    
            </div>

</template>

<script>
import VueRouter from 'vue-router'
import todolist from './todolist.vue'
export default {
  prop:['username'],
  components:{
    todolist
  },
  methods:{
    goback(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>