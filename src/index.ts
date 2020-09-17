import EditorJS from '@editorjs/editorjs';


const holderElement = document.createElement("div")
holderElement.setAttribute("id", "editor-js-holder")
document.body.appendChild(holderElement);
const editor = new EditorJS("editor-js-holder");
console.log(EditorJS)

