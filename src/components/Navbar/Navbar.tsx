import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between h-20 absolute z-10 bg-white w-full  px-12 ">
        <h1 className="text-purple-500 font-bold text-2xl">Hotel Lunar</h1>

        <ul className="hidden lg:flex justify-between gap-24 items-center font-bold">
        <Link to='/' className='text-purple-500' >  Home </Link>
                    <Link to='/about' className='hover:text-purple-500'  >Rooms and Suites</Link>
                    <Link to='/facilities' className='hover:text-purple-500' >Facilities</Link>
                    <Link to='/contact' className='hover:text-purple-500' >Contacts</Link>
                    <Link to='/' className='hover:text-purple-500'>Offers</Link>
                    <Link to='/' className='hover:text-purple-500'>Events</Link>
        </ul>
        <Outlet />
      </nav>
    </header>
  );
};

export default Navbar;
