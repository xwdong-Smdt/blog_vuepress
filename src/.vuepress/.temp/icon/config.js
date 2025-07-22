import { hasGlobalComponent } from "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/self/self/node_modules/.pnpm/@vueuse+core@13.5.0_vue@3.5.17/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/self/self/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_1f5f5004651ccc4cc32328d3815c8cc7/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
