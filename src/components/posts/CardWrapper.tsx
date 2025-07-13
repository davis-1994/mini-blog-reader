const CardWrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='max-w-[1200px] m-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
      {children}
    </div>
  );
};

export default CardWrapper;
