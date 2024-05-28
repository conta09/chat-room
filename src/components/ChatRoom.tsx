"use client"
import React, { useState, useRef } from 'react';
import { IoMdSend } from "react-icons/io";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const messageInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = messageInputRef.current.value.trim();
    if (message) {
      setMessages([...messages, message]);
      messageInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white text-white my-auto ">
      <div className="chat-room h-[450px] overflow-y-auto pt-4 ml-2">
        {messages.map((message, index) => (
          <div key={index} className="bg-blue-500 w-1/3 text-white rounded-[25px] py-2 p-2 mb-2">{message}</div>
        ))}
      </div>
      <div className=" ">
      <form className='flex' onSubmit={handleSubmit}>
        <input ref={messageInputRef} className="w-full h-10 border-2 border-[#605f5f] my-1 outline-none text-black bg-white rounded-full " type="text"  />
        <button type="submit" className=' ml-auto'>
        <IoMdSend className='m-3 text-[#656464]'/>
        </button>
      </form>
      </div>
     
    </div>
  );
};

export default ChatRoom;
