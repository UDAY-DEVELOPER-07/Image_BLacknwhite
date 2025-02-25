import React from 'react'
import Header from './Header'
import '../assets/images/img.png'

function Welcome() {
  return (
    <>
        <Header/>
        <main className="w-full h-screen bg-[#9E9FA2] flex  justify-center">
            <div className="bg-[url('./assets/images/img.png')] object-cover  w-10/12 h-screen"></div>
        </main>
    </>
  )
}

export default Welcome