<template>
  <div>
    <input class="input-text" type="text" name="ListItem" v-model="msg" />
    <a-button type="primary" @click="handleclick">Add</a-button>
    <br />
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </a-modal>
    <ol>
      <todo-item
        v-for="(item,index) of this.$store.state.showItems"
        :key="index"
        :licontent="item"
        :itemindex="index"
      ></todo-item>
    </ol>
  </div>
</template>

<script >
import item from "./item";
export default {
  components: {
    "todo-item": item
  },
  data() {
    return {
      msg: "",
      ModalText:"确认添加",
      visible: false,
      confirmLoading: false
    };
  },
  methods: {
    handleclick() {
      this.visible = true
      if (this.msg === "") {
        alert("it not null");
      } else {
        let item = {
          content: this.msg,
          isChecked: false
        };
        this.$store.dispatch("addItem", item);
        this.msg = "";
      }
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
};
</script>
<style>
</style>
