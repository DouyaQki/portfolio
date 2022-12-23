import React from 'react'

const Editor = ({ editorValue, handleChange }) => {
  return (
      <textarea
        id='editor'
        name='editor'
        value={editorValue}
        onChange={handleChange}
      />
  )
}

export default Editor
