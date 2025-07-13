import React from 'react';

const UserInfoWrapper = ({
  children,
  title,
}: Readonly<{ children: React.ReactNode; title: string }>) => {
  return (
    <div className='border-2 border-base-300 rounded-lg p-5 inline-block h-50'>
      <h1 className='text-2xl font-bold text-center mb-5'>{title}</h1>
      {children}
    </div>
  );
};

export default UserInfoWrapper;
