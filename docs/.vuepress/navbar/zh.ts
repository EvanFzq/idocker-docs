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
  "/changelog.html",
  {
    text: "其他",
    prefix: "/others/",
    children: ["/others/communicate.md"],
  },
]);
