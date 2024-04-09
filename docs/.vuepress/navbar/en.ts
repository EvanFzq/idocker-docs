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
  {
    text: "Changelog",
    prefix: "/changelog/",
    children: [
      { text: "Latest", link: "latest.md" },
      { text: "Beta", link: "beta.md" },
    ],
  },
  {
    text: "Others",
    prefix: "/en/others/",
    children: ["communicate.md"],
  },
]);
