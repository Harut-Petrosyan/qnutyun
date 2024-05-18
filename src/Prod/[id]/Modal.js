import React from 'react'
import "./Popup.css"

function Modal({active,setActive}) {
  return (
    <div className={active?'modal active':'modal'} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e=>e.stopPropagation()}>
        <h1 className='modaler'>You buy my product</h1>
      </div>
    </div>
    
  )
}

export default Modal