import { CommandType } from "../../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * ikun命令
 * @author FurinaLuna
 */
const ikuntestCommand: CommandType = {
  func: "ikuntest",
  name: "ikun Test", 
  desc: "测试 ikun 是否正常运行",
  options: [],
  collapsible: true,
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./IkunTestBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default ikuntestCommand;
