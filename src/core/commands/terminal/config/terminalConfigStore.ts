import { defineStore } from "pinia";

/**
 * 终端配置存储
 *
 * @author FurinaLuna
 */
export const useTerminalConfigStore = defineStore("terminalConfig", {
  state: () => ({
    // 背景
    background: "black",
    // 输入提示
    showHint: true,
    // 欢迎文本
    welcomeTexts: [] as string[],
  }),
  getters: {},
  // 持久化配置
  persist: {
    key: "terminal-config-store",
    storage: window.localStorage,
    beforeRestore: (context) => {
      console.log("load terminalConfigStore data start");
    },
    afterRestore: (context) => {
      console.log("load terminalConfigStore data end");
    },
  },
  actions: {
    setBackground(url: string) {
      if (!url) {
        return;
      }
      this.background = url;
    },
    /**
     *  璁剧疆鎴栧弽杞彁绀?
     * @param hint
     * @return 淇敼鍚庣殑鎻愮ず寮€鍚?/ 鍏抽棴鐘舵€?
     */
    setOrToggleShowHint(hint?: string): boolean {
      // 鍙嶈浆鎻愮ず
      if (!hint) {
        this.showHint = !this.showHint;
        return this.showHint;
      }
      // 璁剧疆鎻愮ず
      if (hint === "on") {
        this.showHint = true;
      } else if (hint === "off") {
        this.showHint = false;
      }
      return this.showHint;
    },
    /**
     * 淇敼缁堢鎻愮ず璇?
     * @param welcomeTexts
     */
    setWelcomeTexts(welcomeTexts: string[]) {
      this.welcomeTexts = welcomeTexts;
    },
    reset() {
      this.$reset();
    },
  },
});
