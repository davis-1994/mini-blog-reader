'use client';

import { useParams } from 'next/navigation';

import { useFetch } from '@/hooks/useFetch';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

const Post = ({ params }: Props) => {
  const { id } = useParams();

  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);

  if (postLoading || userLoading) {
    return <div>Loading...</div>;
  }

  if (postError || userError) {
    return <div>Post not found</div>;
  }

  return (
    <div className='p-4 max-w-[1200px]'>
      <h1 className='text-xl font-bold text-center mb-5'>{post.title}</h1>
      <p>{post.body}</p>

      <h1 className='text-l text-end font-bold mt-5'>
        Author:{' '}
        <Link className='underline text-blue-500' href={`/users/${user.id}`}>
          {user.name}
        </Link>
      </h1>
    </div>
  );
};

export default Post;
