import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar bg-base-300 shadow-sm mb-5'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost text-xl uppercase'>
          mini-blog
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
