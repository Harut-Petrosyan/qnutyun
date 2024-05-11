import React from 'react'
import { useEffect,useState } from 'react'
import Modal from './Prod/[id]/Modal'


function Home() {
  const [data,setData]=useState([])
  const [ModalActive,setModalActive]=useState(true)
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>setData(res))
  },[])
  return (
    <div className='Appi'>
        {data.map((e) => {
          return(
            <div className='im' key={e.id}>
              <img className='image' src={e.image} alt='a'/>
              <h1 className='h1'>{e.title}</h1>
              <h1 className='p'>{e.price}$</h1>
              <button className='bt' onClick={(e)=>setModalActive(true)}>BUY</button>
            </div>
          )
        })}
      
      <Modal active={ModalActive} setActive={setModalActive}>
        
      </Modal>
    </div> 
  )
}

export default Home