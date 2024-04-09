import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/guide/": "structure",
  "/changelog/": [
    { text: "正式版", link: "latest.md" },
    { text: "测试版", link: "beta.md" },
  ],
  "/others/": "structure",
});
