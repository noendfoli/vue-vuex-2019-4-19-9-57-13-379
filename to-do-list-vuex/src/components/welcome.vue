<template>
  <div>
    <!-- <a-tooltip :trigger="['focus']" placement="topLeft" overlayClassName="numeric-input">
      <span
        slot="title"
        v-if="value"
        class="numeric-input-title"
      >{{value !== '-' ? formatNumber(value) : '-'}}</span>
      <template slot="title" v-else>Input a name</template>
      <a-input
        :value="value"
        @change="onChange"
        @blur="onBlur"
        placeholder="Input a number"
        maxlength="25"
        style="width: 120px"
        v-model="msg"><a-button @click="startUse">开始使用</a-button>
    </a-tooltip>-->
    <a-row>
      <a-col :span="12">
        <a-tooltip :trigger="['focus']" placement="topLeft" overlayClassName="numeric-input">
          <span
            slot="title"
            v-if="value"
            class="numeric-input-title"
          >{{value !== '-' ? formatNumber(value) : '-'}}</span>
          <template slot="title" v-else>Input a naem</template>
          <a-input
            :value="value"
            @change="onChange"
            @blur="onBlur"
            placeholder="Input a number"
            maxlength="25"
            style="width: 120px"
          />
        </a-tooltip>
      </a-col>
      <a-col :span="12"><a-button type="primary">提交</a-button></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: " ",
      value: ""
    };
  },
  methods: {
    startUse() {
      this.$router.push({ name: "home", params: { username: this.msg } });
    }
  }
};
</script>

