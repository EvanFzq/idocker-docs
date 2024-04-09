import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      "introduce.md",
      "quick-start.md",
      "container.md",
      "file-manage.md",
      "setting.md",
      "safe.md",
    ],
  },
  {
    text: "更新日志",
    prefix: "/changelog/",
    children: [
      { text: "正式版", link: "latest.md" },
      { text: "测试版", link: "beta.md" },
    ],
  },
  {
    text: "其他",
    prefix: "/others/",
    children: ["/others/communicate.md"],
  },
]);
