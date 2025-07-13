'use client';

import UserInfo from '@/components/users/UserInfo';
import UserInfoWrapper from '@/components/users/UserInfoWrapper';
import UserPosts from '@/components/users/UserPosts';
import { useParams } from 'next/navigation';
import { useFetch } from '@/hooks/useFetch';

const User = () => {
  const { id } = useParams();
  const userId = id as string;

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>User not found</div>;
  }

  const { name, username, email, phone, website, address, company } = data;

  return (
    <>
      <div className='p-4 sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1100px] w-full mx-5 md:mx-0 flex items-start gap-5 flex-wrap justify-center'>
        <UserInfoWrapper title='User info'>
          <UserInfo title='Name' body={name} />
          <UserInfo title='Username' body={username} />
          <UserInfo title='Email' body={email} />
          <UserInfo title='Phone' body={phone} />
          <UserInfo title='Website' body={website} />
        </UserInfoWrapper>

        <UserInfoWrapper title='Address'>
          <UserInfo title='Street' body={address.street} />
          <UserInfo title='Suite' body={address.suite} />
          <UserInfo title='City' body={address.city} />
          <UserInfo title='Zipcode' body={address.zipcode} />
        </UserInfoWrapper>

        <UserInfoWrapper title='Company'>
          <UserInfo title='Name' body={company.name} />
          <UserInfo title='Catchphrase' body={company.catchPhrase} />
          <UserInfo title='Bs' body={company.bs} />
        </UserInfoWrapper>
      </div>
      <div className='divider'>Posts</div>
      <UserPosts userId={userId} />
    </>
  );
};

export default User;
