import React from 'react'
import logo from '../assets/logo.jpg'

const DialogScreen = () => {
  return (
    <div>
      <div className='flex justify-end mr-5 mt-3'>
        <p className=''>Skip</p>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <p>ProZectJone</p>
        <img src={logo} className='invert w-25' />
      </div>
      <div>
        <h1>ProZectJone</h1>
        <p>prozectjone is a site where you can share your crazy project ideas, and see it come to live.
          -the name prozectjone is derived from the word "project zone"
        </p>
      </div>
    </div>
  )
}

export default DialogScreen
