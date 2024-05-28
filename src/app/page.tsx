import React from 'react'
import ChatRoom from '@/components/ChatRoom'
const page = () => {
  return (
      <div className="container md:w-1/3 sm:w-2/3 mx-auto pt-3">
        <div className="header py-3 bg-[#724ae8] border rounded-t-md">
            <h2 className='text-center text-white font-medium'>The box</h2>
        </div>
        <ChatRoom />
      </div>
  )
}

export default page
