<template>
  <yu-terminal
    ref="terminalRef"
    :user="loginUser"
    full-screen
    :on-submit-command="onSubmitCommand"
  />
</template>

<script setup lang="ts">
import { doCommandExecute } from "../core/commandExecutor";
import { onMounted, ref } from "vue";
import { useUserStore } from "../core/commands/user/userStore";
import { storeToRefs } from "pinia";
import { useTerminalConfigStore } from "../core/commands/terminal/config/terminalConfigStore";
import myAxios from "../plugins/myAxios";

const terminalRef = ref();

const onSubmitCommand = async (inputText: string) => {
  if (!inputText) {
    return;
  }
  const terminal = terminalRef.value.terminal;
  await doCommandExecute(inputText, terminal);
};

const userStore = useUserStore();
const { loginUser } = storeToRefs(userStore);
const configStore = useTerminalConfigStore();

onMounted(() => {
  userStore.getAndSetLoginUser();
  if (configStore.background === "black") {
    myAxios
      .post("/background/get/random")
      .then((res) => {
        configStore.setBackground(res.data);
      })
      .catch(() => {});
  }
});
</script>

<style></style>
