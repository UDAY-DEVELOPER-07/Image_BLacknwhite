import { useState } from 'react'
function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="w=full h-16 bg-whiteS flex items-center ">
      <div className='m-3'>
        <h2 className=' font-Fahkwang text-black text-2xl font-medium'>Grey Image Comparer</h2>
      </div>
    </main>
    </>
  )
}

export default Header
