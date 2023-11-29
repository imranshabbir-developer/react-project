import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Productsdb from '../data/Productlist'


const Singlepage = () => {

  const[qty, setQty] = useState(1)

  let navigate = useNavigate()

  const increment = () =>{
    setQty(qty+1)
  }
  const decrement = () =>{
    if(qty>1){
      setQty(qty-1)
    }
  }


  let {id} = useParams()

  let filterData = Productsdb.find(x => x.id == id)


  const goBack = () =>{
    navigate('/products')
  }

  return (
    <div>
        <h1 className='text-center text-primary my-3 fs-1 fw-bold'>Single Product Detail Page</h1>

      <button className='btn btn-dark btn-lg' onClick={goBack}>Go to Product Page</button>    

        <div className='container'>

          <div className='row my-5'>

            <div className='col-lg-6'>
                <img src={filterData.image} width={400} height={400} />
            </div>


            <div className='col-lg-6 mb-3'>

                <h1 className='text-warning my-2'>CATEGORY: {filterData.category}</h1>
                <hr />

                  <h2 className='text-start'>Name: {filterData.title}</h2>
                  <p className='text-start lead mt-3'>Name: {filterData.description}</p>

                  <h2 className='text-start text-info display-4 fw-bold'>PRICE $: {filterData.price}</h2>

                  <p className='fs-3 text-start lead fw-bolder text-secondary'>
                      Ratings by User: {filterData.rating.rate}
                  </p>

                  <div className='text-start'>
                        <button onClick={increment} className='btn btn-dark btn-lg me-2'>+</button>
                        {qty}
                        <button onClick={decrement} className='btn btn-dark btn-lg ms-2'>-</button>

                  </div>

                  <h2 className='text-danger text-start mt-4'>Total Amount: 
                      <span className='text-primary'> { qty*filterData.price } $</span>
                  </h2>
          
            </div>  

          </div>

        </div>

    </div>
  )
}

export default Singlepage
