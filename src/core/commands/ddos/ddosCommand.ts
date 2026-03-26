import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * DDOS 命令
 * @author FurinaLuna
 */
const ddosCommand: CommandType = {
  func: "ddos",
  name: "ddos",
  desc: "发起 DDOS 攻击",
  options: [],
  action(options, terminal) {
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./DdosBox.vue")),
      props: {},
    };
    terminal.writeResult(output);
  },
};

export default ddosCommand;
