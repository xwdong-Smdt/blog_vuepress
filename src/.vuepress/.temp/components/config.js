import { hasGlobalComponent } from "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/self/self/node_modules/.pnpm/vuepress-plugin-components@_62bb46de55ffc2b160b9b475577705c2/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/self/self/node_modules/.pnpm/vuepress-plugin-components@_62bb46de55ffc2b160b9b475577705c2/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
