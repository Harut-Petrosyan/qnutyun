import React from 'react'
import { useEffect,useState } from 'react'
import Modal from './Prod/[id]/Modal'


function Home() {
  const [data,setData]=useState([])
  const [ModalActive,setModalActive]=useState(false)
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json(5))
    .then((res)=>setData(res))
  },[])
  return (
    <div className='Appi'>
        {data.map((e) => {
          return(
            <div className='im' key={e.id}>
              <img className='image' src={e.image} alt='a'/>
              <ul>
                <li className='li1'>
                  {e.title}
                </li>
                <li className='li2'>
                  {e.description}
                </li>
                <li className='li3'>
                  {e.category}
                </li>
                <li className='li4'>
                  {e.price}$
                </li>
              </ul>
              <button className='bt' onClick={(e)=>setModalActive(true)}>BUY</button>
            </div>
          )
        })}
      
      <Modal active={ModalActive} setActive={setModalActive}/>
    </div> 
  )
}

export default Home