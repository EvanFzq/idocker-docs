import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  port: 3680,
  open: true,
  base: "/",
  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "iDocker",
    //   description: "The best docker management tool",
    // },
    "/": {
      lang: "zh-CN",
      title: "iDocker",
      description: "最好用的docker管理工具",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
