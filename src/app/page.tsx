import React from 'react';
import ChatRoom from '@/components/ChatRoom';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 animate-gradient">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        {/* Header with Creative Text */}
        <div className="w-full max-w-2xl backdrop-blur-lg bg-opacity-20 bg-white border border-white border-opacity-10 rounded-t-3xl shadow-2xl">
          <div className="header py-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-3xl">
            <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">
              The Idea Box
            </h2>
            <p className="text-center text-sm text-purple-200 mt-1">
              Share your thoughts anonymously. No judgments, just ideas.
            </p>
          </div>

          {/* ChatRoom Component */}
          <div className="p-6">
            <ChatRoom />
          </div>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-purple-300 text-center max-w-2xl">
          Every idea matters. Speak freely, inspire others, and let creativity flow.
        </p>
      </div>
    </div>
  );
};

export default Page;