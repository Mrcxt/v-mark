<template>
  <div id="app">
    <h1>v-mark</h1>
    <button @click="getLocal">clg</button>
    <!--  -->
    <div class="v-mark">
      <control-bar></control-bar>
      <editor-view></editor-view>
    </div>
  </div>
</template>

<script>
import editorView from "./components/editorView";
import controlBar from "./components/controlBar";

export default {
  name: "App",
  components: {
    editorView,
    controlBar
  },
  data() {
    return {
      key: ""
    };
  },
  computed: {},
  methods: {
    getLocal() {
      console.log(JSON.parse(localStorage.getItem("vMarkValue")));
    }
  }
};
</script>

<style lang="less">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    color: @success;
  }
  .v-mark {
    overflow: hidden;
    margin: 0 auto;
    width: 968px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
  }
}
</style>

