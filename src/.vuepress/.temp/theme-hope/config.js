import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/self/self/node_modules/.pnpm/@vuepress+plugin-catalog@2._f7eaf909a379af1ded6868274137b92a/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";
import { GlobalEncrypt, LocalEncrypt } from "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/self/self/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_8dc853e25f53a2846a7e9510a2e97673/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/self/self/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_3b221a49e81bec77d3c389837fbb17b4/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
