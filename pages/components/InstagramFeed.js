import React from 'react';

const InstagramGallery = ({ posts }) => {
  return (
    <div>
      <h1>My Instagram Gallery</h1>
      <div>
        {posts.data.map(post => (
          <div key={post.id}>
            <img src={post.media_url} alt={post.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;