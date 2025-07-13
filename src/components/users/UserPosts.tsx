'use client';

import { useFetch } from '@/hooks/useFetch';
import CardWrapper from '../posts/CardWrapper';
import PostCard from '../posts/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
};

const UserPosts = ({ userId }: { userId: string }) => {
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
          data.map((post: Post) =>
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
