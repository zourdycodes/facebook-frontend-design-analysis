import React from 'react';
import Image from 'next/image';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

export const InputBox = () => {
  const sendPost = (e) => {
    e.preventDefault();
    console.log('boooooo');
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center p-4">
        <Image
          src="https://picsum.photos/200/300"
          width={40}
          height={40}
          layout="fixed"
          alt="profile user"
          className="rounded-full cursor-pointer"
        />

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, Dude?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            submit
          </button>
        </form>
      </div>

      <div className="flex items-center justify-evenly p-3 border-t ">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
