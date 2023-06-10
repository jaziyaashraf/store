import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
// import { useDispatch,useSelector } from 'react-redux'
// import { ProductListReducer } from '../reducers/ProductReducer'
// import { listProducts } from '../actions/productAction'
function Home() {
    const[prod,setProd]=useState([])
     const fetchData=async()=>{
         fetch("/Products.json").then(res=>res.json()).then(res=>setProd(res))
     }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <>
       <Row sm={3} md={6} lg={4} xl={8}>
        {prod.map(item=>{
         return(
          <ProductCard item={item}/>
         )
        })}
        </Row> 
    </>
  )
  }

export default Home