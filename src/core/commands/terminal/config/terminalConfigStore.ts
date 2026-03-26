import { defineStore } from "pinia";

/**
 * 缁堢閰嶇疆鐘舵€佸瓨鍌?
 *
 * @author FurinaLuna
 */
export const useTerminalConfigStore = defineStore("terminalConfig", {
  state: () => ({
    // 鑳屾櫙
    background: "black",
    // 杈撳叆鎻愮ず
    showHint: true,
    // 缁堢娆㈣繋璇?
    welcomeTexts: [] as string[],
  }),
  getters: {},
  // 鎸佷箙鍖?
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
     * 璁剧疆鎴栧弽杞彁绀?
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
