import React from 'react';
import Image from 'next/image';

export const SidebarRow = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center space-x-2 p-4">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
          alt="profile user random"
        />
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};
