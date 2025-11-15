import React from 'react'
import loading from './loading.gif'
const  Spinner =()=>{
    return (
      <div role="status" aria-live="polite" className='text-center'>
        <img className='my-3 mx-auto h-10 w-10' src={loading} alt="Loading" />
      </div>
    )
  }

export default Spinner

