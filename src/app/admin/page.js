import React from 'react'
import AdminAside from '../(client)/components/AdminAside'
import AdminMain from '../(client)/components/AdminMain'

const admin = () => {
  return (
    <div className='flex h-dvh'>
      <AdminAside />
      <AdminMain />
    </div>
  )
}

export default admin