import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { PostCard } from '../PostCard';

export const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(10);

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

    if (response.status === 200 && response.status <= 300) {
      setIsLoading(false);
      setPostData(response.data.data);
      console.log(response.data.data);
    } else {
      setIsLoading(false);
      throw new Error('Sorry cannot fetch the data, check your connection!');
    }
  }, [index]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const events = window.addEventListener('scroll', () => {
      if (
        !isLoading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 20
      ) {
        // eslint-disable-next-line
        setIndex((prevIndex) => {
          return prevIndex + 10;
        });
      }
    });

    return () => {
      window.removeEventListener('scroll', events);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {postData.map((post) => {
        const {
          id,
          image,
          likes,
          text,
          tags,
          publishDate,
          owner: { firstName, lastName, picture },
        } = post;

        return (
          <PostCard
            key={id}
            tags={tags}
            likes={likes}
            image={image}
            message={text}
            userProfile={picture}
            timestamp={publishDate}
            name={`${firstName} ${lastName ?? ''}`}
          />
        );
      })}
    </div>
  );
};
