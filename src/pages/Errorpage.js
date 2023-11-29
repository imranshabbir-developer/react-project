import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
        <div className='container w-20 mt-5 d-flex flex-column justify-content-center'>
            <h1>Error 404 - Page not found</h1>
            <h2>Something went wrong</h2>
            <Link to="/" className='btn btn-dark btn-lg'> Go Back to Home</Link>
        </div>
    </div>
  )
}

export default Errorpage
