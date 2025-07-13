'use client';

import { useState } from 'react';

import { useFetch } from '@/hooks/useFetch';
import Pagination from '@/components/posts/Pagination';
import CardWrapper from '@/components/posts/CardWrapper';
import PostCard from '@/components/posts/PostCard';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(10);
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=' + page
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

      {data.lenght != 0 && !loading && (
        <Pagination maxPage={maxPage} page={page} setPage={setPage} />
      )}
    </>
  );
};

export default Home;
