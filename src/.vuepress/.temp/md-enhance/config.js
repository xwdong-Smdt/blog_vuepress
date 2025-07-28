import CodeDemo from "D:/blog_vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@_b7931385d771dd13a606518f8106e234/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/blog_vuepress/node_modules/.pnpm/vuepress-plugin-md-enhance@_b7931385d771dd13a606518f8106e234/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
