import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Navbar() {
  // Use the useRouteMatch hook to get the current URL
  const {pathname} = useLocation();

  return (
    <nav className="bg-slate-800 shadow-lg">
        <div className='container mx-auto py-4 flex items-center justify-between'>
            <Link className="text-white font-bold text-2xl" to="/">
              My App
            </Link>
            <div className="relative flex items-center gap-x-3">
              {/* Use the url variable to determine which link is active */}
              <Link className={`p-2 ${pathname === '/' ? 'text-[red]' : 'text-white '}`} to="/">
                Home
              </Link>
              <Link className={` p-2 ${pathname === '/movies' ? 'text-[red]' : 'text-white'}`} to="/movies">
                Movies
              </Link>
            </div>

        </div>
    </nav>
  );
}

export default Navbar;
