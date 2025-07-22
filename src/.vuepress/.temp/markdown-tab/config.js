import { CodeTabs } from "D:/self/self/node_modules/.pnpm/@vuepress+plugin-markdown-t_8071e6103ee2f136f99af5bc5c32551e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/self/self/node_modules/.pnpm/@vuepress+plugin-markdown-t_8071e6103ee2f136f99af5bc5c32551e/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/self/self/node_modules/.pnpm/@vuepress+plugin-markdown-t_8071e6103ee2f136f99af5bc5c32551e/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
