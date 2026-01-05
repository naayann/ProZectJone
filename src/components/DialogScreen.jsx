import React from 'react'
import logo from '../assets/logo-light.png'
import title from '../assets/Title.png'

const DialogScreen = () => {
  return (
    <div>
      <div className='flex justify-end fixed top-0 right-0 p-5'>
        <p className='font-medium'>Skip</p>
      </div>
      <div className='flex justify-center items-center flex-col mt-25'>
        <img src={title} className='w-80'/>
        <img src={logo} className='invert w-50' />
      </div>
      <div className='fixed bottom-0 mb-10 ml-4'>
        <h1 className='font-semibold text-blue-600 text-lg'>ProZectJone</h1>
        <p className='text-xs font-medium '>prozectjone is a site where you can share your crazy project ideas, and see it come to live.
          <br />-the name prozectjone is derived from "project zone".
        </p>
      </div>
    </div>
  )
}

export default DialogScreen
