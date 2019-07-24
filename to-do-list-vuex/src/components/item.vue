<template>
  <li>
    <div class="lefthide">
      <input type="checkbox" v-model="licontent.isChecked">
      <span v-if="!isEdit" @dblclick="onDblclick()">{{licontent.content}}</span>
    </div>
    <input class="edit" type="text" v-if="isEdit" v-model="licontent.content" @blur="onSubmit(licontent)" />
    <button class="righthide" @click="delItem(licontent)">-</button>
  </li>
</template>

<script>
export default {
  props: ["licontent", "liindex"],
  data() {
    return {
      isEdit: false
    };
  },
  methods: {
    onDblclick() {
      this.isEdit = true;
    },
    onSubmit(item) {
      this.isEdit = false;
      this.$store.dispatch('updateItem',item)
    },
    delItem(item) {
      this.$store.dispatch('delItem',item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>