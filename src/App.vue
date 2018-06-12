<template>
  <div id="app" class="markdown-preview">
    <h1>v-mark</h1>
    <!--  -->
    <div class="rss-link">
      <button class="bttn-simple bttn-xs bttn-success">
        <a href="https://github.com/Mrcxt/v-mark">Github源码</a>
      </button>
      <button class="bttn-simple bttn-xs bttn-success">
        <a href="https://blog.mrcxt.com/">虾哔哔のBlog</a>
      </button>
    </div>
    <div class="describe">
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
    <editor-view></editor-view>
  </div>
</template>

<script>
import editorView from "./components/editorView";

export default {
  name: "App",
  components: {
    editorView
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
  margin-bottom: 150px;
  h1 {
    color: @success;
  }
  .describe {
    width: 768px;
  }
  .v-mark {
    overflow: hidden;
    width: 998px;
    border: 1px solid @bg-color-dark;
    border-radius: 10px;
  }
}
</style>

