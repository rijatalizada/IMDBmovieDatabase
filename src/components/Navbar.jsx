import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // Use the useRouteMatch hook to get the current URL
  const {pathname} = useLocation();

  return (
    <nav className="bg-slate-800 shadow-lg">
        <div className='container mx-auto py-4 flex items-center justify-between'>
            <Link className="text-white font-bold text-2xl" to="/">
              Movies App
            </Link>
            <div className="relative flex items-center gap-x-3">
              {/* Use the url variable to determine which link is active */}
              <Link className={`p-2 ${pathname === '/' ? 'text-[red]' : 'text-white '}`} to="/">
                Home
              </Link>
              <Link className={` p-2 ${pathname === '/movies' ? 'text-[red]' : 'text-white'}`} to="/movies">
                Movies
              </Link>
              <Link className={` p-2 ${pathname === '/contact' ? 'text-[red]' : 'text-white'}`} to="/contact">
                Contact Us
              </Link>
              <Link className={` p-2 ${pathname === '/messages' ? 'text-[red]' : 'text-white'}`} to="/messages">
                Messages
              </Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
