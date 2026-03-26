<template>
  <div>关于本站：FurinaIndex 极客范儿的浏览器主页</div>
  <div>
    <a href="https://github.com/Furinaluna/zcwindex" target="_blank">
      代码开源，欢迎 star~
    </a>
  </div>
  <div></div>
  <div>
    作者：
    <a href="https://github.com/Furinaluna" target="_blank">
      Furinaluna
    </a>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
