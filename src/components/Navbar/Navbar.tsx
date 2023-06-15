const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row items-center justify-between h-20 absolute z-10 bg-white w-full  px-12 ">
        <h1 className="text-purple-500 font-bold text-2xl">Hotel Lunar</h1>

        <ul className="hidden lg:flex justify-between gap-24 items-center font-bold">
          <li>Home</li>
          <li>Rooms and Suits</li>
          <li>Facilities</li>
          <li>Offer</li>
          <li>Contacts</li>
          <li>Events</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
