'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/useFetch';
import CardWrapper from '../posts/CardWrapper';
import PostCard from '../posts/PostCard';

const UserPosts = ({ userId }: { userId: string }) => {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(10);
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  );

  if (data.lenght == 0 && !loading && !error) {
    return <div>No posts yet</div>;
  }

  return (
    <>
      <CardWrapper>
        {loading ? (
          <div className='text-center'>Loading...</div>
        ) : (
          data.map((post: any) =>
            PostCard({
              post: {
                id: post.id,
                title: post.title,
                body: post.body,
              },
            })
          )
        )}
      </CardWrapper>
    </>
  );
};

export default UserPosts;
