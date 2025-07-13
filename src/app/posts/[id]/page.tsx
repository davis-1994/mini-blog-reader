'use client';

import { useParams } from 'next/navigation';

import { useFetch } from '@/hooks/useFetch';
import Link from 'next/link';

const Post = () => {
  const { id } = useParams();

  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (postLoading) {
    return <div>Loading...</div>;
  }

  if (postError) {
    return <div>Post not found</div>;
  }

  return (
    <div className='p-4 max-w-[1200px]'>
      <h1 className='text-xl font-bold text-center mb-5'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
