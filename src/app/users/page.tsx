'use client';

import { useFetch } from '@/hooks/useFetch';
import CardWrapper from '@/components/posts/CardWrapper';
import Link from 'next/link';

const Users = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (data.lenght == 0 && !loading && !error) {
    return <div>No users yet</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <CardWrapper>
      {data.map((user: any) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <div
            className='card w-full bg-base-200 card-sm md:card-md shadow-sm'
            key={user.id}
          >
            <div className='card-body'>
              <h2 className='card-title'>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </Link>
      ))}
    </CardWrapper>
  );
};

export default Users;
