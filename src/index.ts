import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import sortBlocks from "editorjs-footnotes/src/blocksorter/sortBlocks"

import { Footnote, FootnoteMaker, TypedParagraph } from 'editorjs-footnotes'
declare global {
  interface Window {
    editor: EditorJS
  }
}

// const wordPasteButton = document.createElement('button')
// wordPasteButton.innerHTML = "Import"
// wordPasteButton.onclick = () => {
//   console.log("Click")
//   navigator.clipboard.readText().then(content => {
//     console.log("Clipboard content", content)
//   })
// }
// document.body.appendChild(wordPasteButton)

const sortButton = document.createElement('button')
sortButton.innerHTML = "Sort"
sortButton.onclick = () => {

  sortBlocks(window.editor)
}
document.body.appendChild(sortButton)

const holderElement = document.createElement('div')
holderElement.setAttribute('id', 'editor-js-holder')
document.body.appendChild(holderElement)
window.editor = new EditorJS({
  holder: 'editor-js-holder',
  autofocus: true,
  tools: {
    header: Header,
    FootnoteMaker,
    paragraph: {
      class: TypedParagraph,
      inlineToolbar: true
    },
    footnoteParagraph: {
      class: Footnote,
      inlineToolbar: ['link', 'bold', 'italic'],
    },
  },
})

