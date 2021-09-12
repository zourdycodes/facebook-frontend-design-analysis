/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

export const PostCard = ({
  image,
  userProfile,
  name,
  tags,
  message,
  timestamp,
  // likes,
}) => {
  return (
    <div className="flex flex-col">
      {/* CONTAINER */}
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        {/* USER CONTAINER */}
        <div className="flex items-center space-x-2">
          <img
            src={userProfile}
            width={40}
            height={40}
            alt="user profile pic"
            className="rounded-full"
          />

          {/* user information */}
          <div>
            <p className="font-medium">{name}</p>

            <p className="text-xs text-gray-400">
              {new Date(timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>

        <div className="flex items-center space-x-3 mt-4 mb-4">
          {tags &&
            tags.map((tag, index) => {
              return (
                <p
                  key={index}
                  className="bg-gray-700 rounded-xl px-2 text-white py-[3px]"
                >
                  {tag}
                </p>
              );
            })}
        </div>
      </div>

      {image && (
        <div>
          <img src={image} alt="post pic" className="object-cover bg-white" />
        </div>
      )}

      {/* footer */}

      <div className="flex justify-between items-center rounded-b-xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};
