/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';

import { Contact } from '../Contact';

export const Widgets = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContacts = useCallback(async () => {
    const response = await axios.get(
      `https://dummyapi.io/data/v1/post?limit=10`,
      {
        method: 'GET',
        headers: {
          'app-id': `613df0aa200eaf1583486712`,
        },
      }
    );

    if (response.status === 200 && response.status <= 304) {
      setIsLoading(false);
      setContacts(response.data.data);
    } else {
      setIsLoading(false);
      throw new Error('fetch error, please check your connection');
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2 items-center">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <img
            src="/spinner-gif-7.gif"
            alt="spinner preloader"
            className="h-32 mt-10"
          />
        </div>
      ) : (
        contacts.map((person) => {
          const {
            id,
            owner: { firstName, lastName, picture },
          } = person;

          return (
            <Contact
              key={id}
              username={`${firstName} ${lastName ?? ''}`}
              profileImage={picture}
            />
          );
        })
      )}
    </div>
  );
};
