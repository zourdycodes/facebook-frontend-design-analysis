import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/client';

export const Login = () => {
  return (
    <div className="grid place-items-center my-40 gap-10">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        width={280}
        height={280}
        objectFit="contain"
        alt="facebook login"
      />

      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-lg text-white text-center cursor-pointer transition duration-150 transform hover:bg-blue-800"
      >
        Login with Facebook
      </h1>
    </div>
  );
};
