import React from 'react'
import { useEffect,useState } from 'react'
import PageWithID from './PageWithId'

function Home() {
  const [data,setData]=useState([])
  const [shopingCard,setShopingCard] = useState(JSON.parse(localStorage.getItem('prod'))||[])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((res)=>setData(res))
  },[])
  useEffect(()=>{
    localStorage.setItem('prod',JSON.stringify(shopingCard))
  },[shopingCard])
  return (
    <div className='Appi'>
        {data.map((e) => {
          return(
            <div className='im' key={e.id}>
              
              <img className='image' src={e.image} alt=''/>
              <ul>
                <li className='li1'>
                  {e.title}
                </li>
                <li className='li2'>
                  {e.category}
                </li>
                <li className='li3'>
                  {e.price}$
                </li>
              </ul>
              <a href='/bascet' className='bto' onClick={()=>setShopingCard([...shopingCard,e])}>Bascet</a>
            </div>
          )
        })}
    </div> 
  )
}
<PageWithID/>

export default Home