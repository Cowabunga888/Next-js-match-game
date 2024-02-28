import React from 'react'

interface Props {
  children: React.ReactNode
}
function DefaultLayout({ children }: Readonly<Props>) {
  return (
    <div className='w-screen h-screen relative'>
      {children}
    </div>
  )
}

export default DefaultLayout
