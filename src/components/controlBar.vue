<template>
  <div class="v-controlBar">
    <div class="apple"></div>
    <div class="title">
      <select v-model="myToken" @change="onchange">
        <template v-for="(val,key) in mySection">
          <option :value="key">{{val.date}}</option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myToken: this.token,
      mySection: {}
    };
  },
  props: {
    token: {
      type: String,
      default: null
    },
    section: {
      type: Object,
      default: function() {}
    }
  },
  computed: {},
  mounted() {
    this.mySection = this.section;
  },
  methods: {
    onchange() {
      this.$emit("changeToken", this.myToken);
    }
  },
  watch: {}
};
</script>

<style lang="less">
.v-controlBar {
  position: relative;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid @hr-color;
  border-radius: 7px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #f8f8f8;
  .apple {
    position: absolute;
    top: 24px;
    left: 3em;
    margin-top: -0.5em;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #fc615d;
    cursor: pointer;
    &::before,
    &::after {
      position: absolute;
      top: 0;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      content: "";
      cursor: pointer;
    }
    &::before {
      left: -1.5em;
      background-color: #fdbc40;
    }
    &::after {
      right: -1.5em;
      background-color: #34c84a;
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    select {
      outline: none;
      border: none;

      // appearance: none;
    }
  }
}
</style>

