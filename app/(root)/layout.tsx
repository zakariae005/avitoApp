import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <main className='relative'>
        <Navbar />
        <div className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
        {children}
        </div>
        
    </main>
  )
}

export default Layout