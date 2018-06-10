<template>
  <div id="app">
    <h1>v-mark</h1>
    <!--  -->
    <div class="describe content">
      <blockquote>
        <p>利用`vue`和`marked`实现的 markdown 编辑器，功能如下：</p>
        <ul>
          <li>左右分屏，可以自由调节分屏大小</li>
          <li>默认新建文章保存一次，之后每次修改3秒后无操作自动保存</li>
          <li>可以查看修改所有保存文章</li>
        </ul>
        <p>计划新增功能：</p>
        <ol>
          <li>快捷工具栏</li>
          <li>左右分屏同步滚动</li>
        </ol>
      </blockquote>
    </div>
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
  methods: {}
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
  .describe {
    margin: 0 auto;
    width: 768px;
  }
  .v-mark {
    overflow: hidden;
    margin: 0 auto;
    width: 998px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
  }
}
</style>

