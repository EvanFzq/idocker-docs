import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/en/guide/",
    children: [
      "introduce.md",
      "quick-start.md",
      "container.md",
      "file-manage.md",
      "setting.md",
      "safe.md",
    ],
  },
  "/en/changelog.html",
  {
    text: "Others",
    prefix: "/en/others/",
    children: ["communicate.md"],
  },
]);
