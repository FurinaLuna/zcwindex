<template>
  <div>
    <audio
      v-if="musicUrl"
      ref="audioRef"
      controls
      autoplay
      :src="musicUrl"
      style="width: 330px"
      @canplay="onAudioCanPlay"
      @error="onAudioError"
      @stalled="onAudioStalled"
    />
    <iframe
      v-if="musicPath && !musicUrl"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      allow="encrypted-media"
      :src="musicPath"
    />
    <a v-if="musicLink" :href="musicLink" target="_blank">打开网易云播放</a>
    <div v-if="playHint">{{ playHint }}</div>
    <div v-if="errorHint">{{ errorHint }}</div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, toRefs } from "vue";
import { getSingleMusic } from "./musicApi";

interface MusicBoxProps {
  name: string;
}

const props = withDefaults(defineProps<MusicBoxProps>(), {});
const { name } = toRefs(props);
const audioRef = ref<HTMLAudioElement>();
const musicPath = ref("");
const musicUrl = ref("");
const errorHint = ref("");
const musicLink = ref("");
const playHint = ref("");
let playTimeout: number | undefined;

const clearPlayTimeout = () => {
  if (playTimeout) {
    window.clearTimeout(playTimeout);
    playTimeout = undefined;
  }
};

const onAudioCanPlay = () => {
  playHint.value = "";
  clearPlayTimeout();
};

const onAudioStalled = () => {
  playHint.value = "音频加载中断，可能是网络波动或音源被限制";
};

const onAudioError = () => {
  clearPlayTimeout();
  const code = audioRef.value?.error?.code;
  if (code === 1) {
    playHint.value = "播放被中止，请重试";
    return;
  }
  if (code === 2) {
    playHint.value = "网络错误，音频流加载失败";
    return;
  }
  if (code === 3) {
    playHint.value = "音频解码失败，可能是音源格式异常";
    return;
  }
  if (code === 4) {
    playHint.value = "当前歌曲可能因版权或区域限制无法播放";
    return;
  }
  playHint.value = "音频播放失败，可能是版权、网络或浏览器策略限制";
};

onMounted(async () => {
  try {
    const res: any = await getSingleMusic(name.value);
    if (res?.code === 0) {
      const music = res.data;
      musicUrl.value = music?.url ?? "";
      musicPath.value = `https://music.163.com/outchain/player?type=2&id=${music.id}&auto=1&height=66`;
      musicLink.value = `https://music.163.com/#/song?id=${music.id}`;
      if (musicUrl.value) {
        playTimeout = window.setTimeout(() => {
          const currentTime = audioRef.value?.currentTime ?? 0;
          if (currentTime <= 0) {
            playHint.value = "已请求音频但未开始播放，可能被浏览器策略或版权限制";
          }
        }, 8000);
      } else {
        playHint.value = "未获取到可用音频直链，已回退到网易云外链播放器";
      }
      return;
    }
    errorHint.value = res?.message ?? "未找到音乐";
  } catch (e) {
    errorHint.value = "音乐服务请求失败";
  }
});

onBeforeUnmount(() => {
  clearPlayTimeout();
});
</script>

<style scoped></style>
