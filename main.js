const core = window[Symbol.for("typora-plugin-core@v2")];
const Plugin = core.Plugin;

const STYLE_ID = "typora-community-plugin-hide-assets-folder-style";

export default class extends Plugin {
  onload() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
/* Hide all folders ending with .assets */
.file-node-content[data-path$=".assets"],
.file-node-content[data-path$=".assets/"],
.sidebar-content [data-path*=".assets"] {
  display: none !important;
  height: 0 !important;
  width: 0 !important;
  visibility: hidden !important;
}
`;

    document.head.appendChild(style);
  }

  onunload() {
    const style = document.getElementById(STYLE_ID);
    if (style) style.remove();
  }
}
