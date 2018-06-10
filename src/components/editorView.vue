
<template>
  <div class="v-editorView">
    <split-pane :min-percent='20' :default-percent='50' split="vertical">
      <template slot="paneL">
        <textarea class="v-editor" :value="vMarkValue.input" @input="update"></textarea>

      </template>
      <template slot="paneR">
        <div class="v-view markdown-preview content" v-html="markToView"></div>
      </template>
    </split-pane>
  </div>
</template>

<script>
import { debounce } from "../until/tool";
import marked from "marked";
import hljs from "highlight.js";

const demoText = `

# h1

## h2

### h3

#### h4

##### h5

###### h6

ppppppp

**bbbbbbb**

*iiiiiii*

[aaaaaaa]()

![img](http://oz2tkq0zj.bkt.clouddn.com/17-11-9/76001088.jpg)

> blockquoteblockquote
> blockquoteblockquote

- ul
- ul
- ul
- ul
  - ul
- ul
  - ul
- ul
  - ul

1. ol
1. ol
1. ol
1. ol
  - ul
2. ol
  - ul
3. ol
  - ul

---

- [ ] checkBox
- [ ] checkBox
- [ ] checkBox
- [x] checkBox
- [x] checkBox
- [x] checkBox


&#x60; code &#x60;;

&#x60;&#x60;&#x60; css
// /将转义字符替换查看效果
.v-mark {
    overflow: hidden;
    margin: 0 auto;
    width: 968px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
  }

&#x60;&#x60;&#x60;


| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 点击按钮时触发 | 无  |


`;

export default {
  data() {
    return {
      vMarkValue: {
        date: this.$dayjs().format("YYYY年MM年DD HH:mm:ss"),
        input: demoText
      },
      token:
        "token" + new Date().getTime() + Math.floor(Math.random() * 10000000)
    };
  },
  computed: {
    // marked
    markToView: function() {
      return marked(this.vMarkValue.input, {
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
    },
    section() {
      return JSON.parse(localStorage.getItem("vMarkValue")) || {};
    }
    // token() {
    //   return this.$store.state.token;
    // }
  },
  methods: {
    // 延迟300ms赋值
    update: debounce(function(e) {
      this.vMarkValue.input = e.target.value;
    }, 300),
    // 保存数据
    saveSection() {
      this.section[this.token] = this.vMarkValue;
      localStorage.setItem("vMarkValue", JSON.stringify(this.section));
      console.log(this.section);
    }
  },
  created() {
    // 新建文章自动保存一次
    this.saveSection();
  },
  watch: {
    // 监听数据变化，延迟保存数据
    "vMarkValue.input": debounce(function(newVal, oldVal) {
      this.saveSection();
    }, 0),
    // token变化时，修改 textarea 的值
    token(newVal, oldVal) {
      console.log(newVal);
      console.log(this.section[newVal].input);
      this.vMarkValue.input = this.section[newVal].input;
    }
  }
};
</script>


<style lang="less">
.v-editorView {
  width: 100%;
  height: 500px;
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
    background-color: #2d2d2d;
    color: #ccc;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    resize: none;
  }
}
</style>
