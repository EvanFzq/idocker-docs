import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/guide/": "structure",
  "/en/changelog/": [
    { text: "Latest", link: "latest.md" },
    { text: "Beta", link: "beta.md" },
  ],
  "/en/others/": "structure",
});
