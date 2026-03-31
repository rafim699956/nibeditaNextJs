import React from 'react'

const AdminAside = () => {
  return (
   <aside className='w-64 bg-gray-800 text-white p-4 shrink-0'>
    <h2 className='text-2xl font-bold mb-4 text-white'>Admin Panel</h2>
    <nav>
      <ul>
        <li className='mb-2'><a href="#" className='hover:text-gray-400'>Dashboard</a></li>
        <li className='mb-2'><a href="#" className='hover:text-gray-400'>Users</a></li>
        <li className='mb-2'><a href="#" className='hover:text-gray-400'>Settings</a></li>
      </ul>
    </nav>
   </aside>
  )
}

export default AdminAside