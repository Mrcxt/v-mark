<template>
  <div id="app">
    <h1>v-mark</h1>

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
  }
};
</script>

<style lang="less">
#app {
  .v-mark {
    overflow: hidden;
    margin: 0 auto;
    width: 968px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
  }
}
</style>

