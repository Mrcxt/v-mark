
<template>
  <div class="v-mark">
    <!--  -->
    <control-bar :token="token" :section="localSection" @changeToken="changeToken"></control-bar>
    <!--  -->
    <!-- <div class="v-editorBar">
      <button class="bttn-simple bttn-xs bttn-success">{{onSaveText}}</button>
    </div> -->
    <!--  -->
    <div class="v-editorView">
      <split-pane :min-percent='20' :default-percent='50' split="vertical">
        <template slot="paneL">
          <textarea class="v-editor" :value="section.input" @input="update"></textarea>
        </template>
        <template slot="paneR">
          <div class="v-view" v-html="markToView"></div>
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script>
import { debounce } from "../until/tool";
import demoText from "../until/markdown-demo";
import marked from "marked";
import hljs from "highlight.js";

//
import controlBar from "./controlBar";

export default {
  components: {
    controlBar
  },
  data() {
    return {
      section: {
        date: this.$dayjs().format("YYYY年MM年DD HH:mm:ss"),
        input: demoText
      },
      token:
        "token" + new Date().getTime() + Math.floor(Math.random() * 10000000),
      onSaveText: ""
    };
  },
  computed: {
    // marked
    markToView: function() {
      return marked(this.section.input, {
        gfm: true, //允许 Git Hub标准的markdown.
        tables: true, //允许支持表格语法。该选项要求 gfm 为true。
        breaks: true, //允许回车换行。该选项要求 gfm 为true。
        pedantic: false, //尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
        sanitize: false, //对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        smartLists: true, //使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
        smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号。
        highlight: function(code) {
          // return hljs.highlightAuto(code).value;
          return hljs ? hljs.highlightAuto(code).value : code;
        }
      });
    },
    // 初始化 section数据
    localSection() {
      return JSON.parse(localStorage.getItem("v_mark_section")) || {};
    }
  },
  methods: {
    // 延迟300ms赋值
    update: debounce(function(e) {
      this.section.input = e.target.value;
    }, 300),
    // 保存数据
    saveSection() {
      this.localSection[this.token] = JSON.parse(JSON.stringify(this.section));
      localStorage.setItem("v_mark_section", JSON.stringify(this.localSection));
      // console.log("saveSection");
    },
    // 将子组件 token 值返回父组件
    changeToken(token) {
      this.token = token;
    }
  },
  created() {},
  mounted() {
    // 新建文章自动保存一次
    this.saveSection();
  },
  watch: {
    // 监听数据变化，延迟保存数据
    "section.input": debounce(function(newVal, oldVal) {
      this.saveSection();
    }, 3000),
    // token变化时，修改 textarea 的值
    token(newVal, oldVal) {
      this.section.input = this.localSection[newVal].input;
    }
  }
};
</script>


<style lang="less">
.v-editorBar {
  padding: 5px 15px;
  background-color: @hr-color;
}
//
.v-editorView {
  width: 100%;
  height: 500px;
  border-top: 1px solid @bg-color-dark;
  .v-editor,
  .v-view {
    overflow-y: auto;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .v-editor {
    outline: none;
    border: none;
    background-color: @bg-color-dark;
    color: #ccc;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    resize: none;
  }
}
</style>
