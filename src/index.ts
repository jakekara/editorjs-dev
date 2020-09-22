import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

// import { Footnote, FootnoteMaker } from '../editorjs-footnotes/src/index';
// console.log("Fakely imported from package", FootnoteMaker, Footnote);

import { Footnote, FootnoteMaker } from "editorjs-footnotes";
console.log("Really imported from package", FootnoteMaker, Footnote);

const holderElement = document.createElement("div");
holderElement.setAttribute("id", "editor-js-holder");
document.body.appendChild(holderElement);
new EditorJS({
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
