"use client"
import React, { useState, useRef, useEffect } from 'react';
import { IoMdSend } from "react-icons/io";

const ChatRoom = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = messageInputRef.current?.value.trim();
    if (message) {
      setMessages(prev => [...prev, message]);
      if (messageInputRef.current) messageInputRef.current.value = '';
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[60vh]">
      {/* Chat Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent"
      >
        {messages.map((message, index) => (
          <div 
            key={index}
            className="flex animate-fade-in"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-4 max-w-[70%] shadow-lg">
              <p className="text-sm">{message}</p>
              <span className="text-xs text-purple-200 mt-1 block opacity-70">
                Anonymous
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form 
        onSubmit={handleSubmit}
        className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-2 shadow-xl"
      >
        <div className="flex items-center space-x-2">
          <input
            ref={messageInputRef}
            type="text"
            placeholder="Type your idea here..."
            className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-3 focus:outline-none focus:ring-0 border-none"
          />
          <button
            type="submit"
            className="p-3 rounded-full bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg"
          >
            <IoMdSend className="text-purple-600 text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;