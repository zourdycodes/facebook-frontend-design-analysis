import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';

import { Stories } from '../Stories';
import { InputBox } from '../InputBox';
import { Posts } from '../Posts';

export const Feed = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(10);

  // TODO: calculate the innerHeight and scrollY of this container component
  const containerRef = useRef(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://dummyapi.io/data/v1/post?limit=${index}`,
      {
        method: 'GET',
        headers: {
          'app-id': `613df0aa200eaf1583486712`,
        },
      }
    );

    const { data } = response.data;

    if (response.status === 200 && response.status <= 300) {
      setIsLoading(false);
      setPostData([...postData, ...data]);
    } else {
      setIsLoading(false);
      throw new Error('Sorry cannot fetch the data, check your connection!');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      ref={containerRef}
      onScroll={(e) => {
        if (
          !isLoading &&
          e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        ) {
          setIndex((prevIndex) => {
            return prevIndex + 10;
          });
        }
      }}
      className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide"
    >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts postData={postData} />
      </div>
    </div>
  );
};
