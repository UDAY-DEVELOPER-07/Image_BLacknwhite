import React from 'react' 
function Header() {
  return (
    <>
    <main className="w=full h-16 bg-whiteS flex items-center ">
      <div className='ml-8 mr-8 flex justify-between w-full'>
        <h2 className=' font-Fahkwang text-black text-2xl font-extrabold'>Grey Image Comparer</h2>
        <div className='flex items-center'>
          <button><p className='m-2 font-Fahkwang'>Home</p></button>
          <button><p className='m-2 font-Fahkwang'>Comparer</p></button>
          <button><p className='m-2 font-Fahkwang'>About</p></button>
        </div>
      </div>
    </main>
    </>
  )
}

export default Header
