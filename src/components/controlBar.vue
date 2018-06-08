<template>
  <div class="v-controlBar">
    <div class="apple"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.v-controlBar {
  position: relative;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid #2d2d2d;
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
}
</style>

