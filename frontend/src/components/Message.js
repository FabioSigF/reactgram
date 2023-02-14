import React from 'react'
import './Message.scss'

export default function Message({msg, type}) {
  return (
    <div className={`message ${type}`}>
      <p>{msg}</p>
    </div>
  )
}
