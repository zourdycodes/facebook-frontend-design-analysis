import React from 'react';
import Image from 'next/image';

// solid icon
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

// outline icon
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

import { HeaderIcon } from '../HeaderIcon';

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* LEFT SECTION = SEARCH COMPONENT */}
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          width={40}
          height={40}
          layout="fixed"
          alt="facebook logo preview"
        />
        <div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex bg-transparent ml-2 items-center outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>

      {/* CENTER SECTION = ICON AND NAVIGATION */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* RIGHT SECTION = USER EXPERIENCES */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile //todo */}

        <p className="whitespace-nowrap font-semibold pr-3">Muhammad Zourdy</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
