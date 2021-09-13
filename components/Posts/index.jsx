import React from 'react';
// import { uuid } from 'uuidv4';

import { PostCard } from '../PostCard';

export const Posts = ({ postData }) => {
  return (
    <div>
      {postData.map((post) => {
        const {
          image,
          likes,
          text,
          tags,
          publishDate,
          owner: { firstName, lastName, picture, id },
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
