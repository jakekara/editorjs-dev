import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

import { Footnote, FootnoteMaker } from "editorjs-footnotes";
declare global {
  interface Window { editor: EditorJS; }
}

const holderElement = document.createElement("div");
holderElement.setAttribute("id", "editor-js-holder");
document.body.appendChild(holderElement);
window.editor = new EditorJS({
  holder: "editor-js-holder",
  autofocus: true,
  tools: {
    header: Header,
    FootnoteMaker,
    footnoteParagraph: {
      class: Footnote,
      inlineToolbar: ["link", "bold", "italic"],
    },
  },
});
