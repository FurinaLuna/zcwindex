import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * 热门命令
 * @author FurinaLuna
 */
const hotCommand: CommandType = {
  func: "hot",
  name: "热门",
  alias: [],
  params: [
    {
      key: "hotType",
      desc: "热门类型",
      required: false,
    },
  ],
  options: [],
  collapsible: true,
  async action(options, terminal) {
    const { hotType = "all" } = options;
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./HotBox.vue")),
      props: {
        hotType,
      },
    };
    terminal.writeResult(output);
  },
};

export default hotCommand;
