/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Contact = ({ username, profileImage }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer  p-2 rounded-xl">
      <img
        src={profileImage}
        className="rounded-full object-cover"
        width={50}
        height={50}
        alt="profile user"
      />
      <p>{username}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  );
};
