import React, { useEffect, useState } from 'react'
import Modal from './Prod/[id]/Modal'
const prod = JSON.parse(localStorage.getItem('prod'))

function Buscet() {
  const [data,setData]=useState([])
  const [modalActive,setModalActive]=useState(false)
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((res)=>setData(prod))
  },[])
  return (
    <div className='Appi'>

    {data.map((e)=>{
      return(
        <div className='img'>
            <button className="delete">X</button>

        <div className='images'>
          <img src={e.image} alt=''/>
            <li className='li1'>
              {e.title} 
            </li>
            <li className='li2'>
              {e.category}
            </li>
            <li className='li3'>
              {e.price}$
            </li>
            <li className='li4'>
              {e.description}
            </li>
            <button onClick={()=> setModalActive(true)}>BUY</button>
        </div>  
        </div>
      )
    })}
    <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  )
}

export default Buscet