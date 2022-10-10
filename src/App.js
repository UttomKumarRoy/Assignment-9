import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'

function App() {
  return (
    <div className='container pt-5'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
