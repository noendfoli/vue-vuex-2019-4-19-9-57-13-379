<template>
<div>
     <ul id="filters">
        <li>
            <a-button type="primary" @click="all">ALL</a-button>
         </li>
         <li>
              <a-button type="primary" @click="active">Active</a-button>
        </li>
        <li>
            <a-button type="primary" @click="complete">Complete</a-button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['licontent','liindex'],
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