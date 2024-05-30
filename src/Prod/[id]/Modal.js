import React, { useEffect, useState } from 'react'
import './Popup.css'

function Modal({active,setActive}) {
  return (
    <div className={active?'modal active':"modal"} onClick={()=> setActive(false)}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        <h1>Successfully</h1>
      </div>
    </div>
  )
}

export default Modal
