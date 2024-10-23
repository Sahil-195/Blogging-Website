import React from 'react'

const Logo = ({width = '100px'}) => {
  return (
    <div className='flex'> 
      <h3 className='text-2xl font-semibold inline'>BLOG&nbsp;</h3>
      <h3 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl font-semibold inline'>SITE</h3>
    </div>
  )
}

export default Logo