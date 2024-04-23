import React from 'react'

export default function Header() {
  return (
    <>
    <div className='flex container mx-auto justify-between p-5 my-5 border rounded-lg w-3/4 bg-gray-100'>
    <div>
        <h1 className='font-bold text-xl'>Logo</h1>
    </div>
    <div className=''>
        <ul className='flex mt-1 text-center'>
            <li className='ml-2'>Home</li>
            <li className='ml-2'>About</li>
            <li className='ml-2'>Contact</li>
            <li className='ml-2'>Projects</li>
            <li className='ml-2'>Addres</li>
        </ul>
    </div>
    </div>
    </>
  )
}
