import React from 'react'
import "./Popup.css"
import { Link } from 'react-router-dom'

function Modal({active,setActive}) {
  return (
    <div className={active?'modal active':'modal'} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e=>e.stopPropagation()}> 
        <Link to={'/login'}>
          <button>BUY</button>
        </Link>
      </div>
    </div>
  )
}
export default Modal