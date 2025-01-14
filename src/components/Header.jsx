import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-black text-white text-center text-2xl flex items-center justify-center h-16 font-serif font-bold'>Black and White Image Changer</h1>
    </>
  )
}

export default Header
