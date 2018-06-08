
<template>
  <div class="v-editorView">
    <textarea class="v-editor" :value="input" @input="update"></textarea>
    <div class="v-view markdown-preview" v-html="markToView"></div>
  </div>
</template>

<script>
import { debounce } from "../until/tool";
import marked from "marked";
import hljs from "highlight.js";

const demoText = `# 标题一

## 标题二

### 标题三

#### 标题四

##### 标题五

###### 标题六

正文

[a链接](1231231221)


- 无序标签
- 无序标签


1. 有序标签
2. 有序标签


> 引用


---

**加重**
      `;

export default {
  data() {
    return {
      input: demoText
    };
  },
  computed: {
    markToView: function() {
      return marked(this.input, {
        gfm: true, //允许 Git Hub标准的markdown.
        tables: true, //允许支持表格语法。该选项要求 gfm 为true。
        breaks: true, //允许回车换行。该选项要求 gfm 为true。
        pedantic: false, //尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
        sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        smartLists: true, //使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
        smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号。
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        }
      });
    }
  },
  methods: {
    update: debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>


<style lang="less">
.v-editorView {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  .v-editor,
  .v-view {
    overflow-y: auto;
    flex: 1;
    padding: 20px;
  }
  .v-editor {
    outline: none;
    border: none;
    background-color: #2d2d2d;
    color: #ccc;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    resize: none;
  }
}
</style>
