import React from 'react'
import { marked } from 'marked'

marked.setOptions({breaks: true})

const Preview = ({ markedText }) => {
  const htmlMarked = { __html: marked.parse(markedText) }
  return <div id='preview' dangerouslySetInnerHTML={htmlMarked} />
}

export default Preview
