<template>
  <div>
    <audio
      v-if="musicUrl"
      controls
      autoplay
      :src="musicUrl"
      style="width: 330px"
    />
    <iframe
      v-if="musicPath && !musicUrl"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      allow="autoplay; encrypted-media"
      :src="musicPath"
    />
    <a v-if="musicLink" :href="musicLink" target="_blank">打开网易云播放</a>
    <div v-if="errorHint">{{ errorHint }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { getSingleMusic } from "./musicApi";

interface MusicBoxProps {
  name: string;
}

const props = withDefaults(defineProps<MusicBoxProps>(), {});
const { name } = toRefs(props);
const musicPath = ref("");
const musicUrl = ref("");
const errorHint = ref("");
const musicLink = ref("");

onMounted(async () => {
  try {
    const res: any = await getSingleMusic(name.value);
    if (res?.code === 0) {
      const music = res.data;
      musicUrl.value = music?.url ?? "";
      musicPath.value = `https://music.163.com/outchain/player?type=2&id=${music.id}&auto=1&height=66`;
      musicLink.value = `https://music.163.com/#/song?id=${music.id}`;
      return;
    }
    errorHint.value = res?.message ?? "未找到音乐";
  } catch (e) {
    errorHint.value = "音乐服务请求失败";
  }
});
</script>

<style scoped></style>
