import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>

    <div className='font-bold text-3xl'>Under Construction</div>

    <div><Link href='/dashboard'><button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Back</button></Link></div>
    </div>
  )
}

export default page