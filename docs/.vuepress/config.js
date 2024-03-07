import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

const menus = {
  "/guide/": [
    {
      text: "指南",
      children: ["/guide/introduce.md", "/guide/quick-start.md"],
    },
  ],
  "/changelog.html": ["/changelog.md"],
  "/others/": [
    {
      text: "其他",
      children: ["/others/communicate.md"],
    },
  ],
};

export default defineUserConfig({
  lang: "zh-CN",
  title: "iDocker",
  description: "最好用的docker管理工具",
  port: 3680,
  open: true,
  theme: defaultTheme({
    logo: "/images/docker-logo.png",
    navbar: ["/", ...Object.values(menus).flat()],
    sidebar: {
      ...menus,
    },
    lastUpdated: true,
  }),

  bundler: viteBundler(),
});
