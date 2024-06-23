import { useState, useEffect } from 'react';
import { NavLink, useLocation,Link } from 'react-router-dom'
import brand from '../assets/images/brand_logo.svg'


export default function Navbar() {

  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="px-5 fixed top-0 left-0 z-20 w-full   bg-black shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-black lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full lg:px-0 px-3 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <NavLink to='/'>
            <img src={brand} alt='' className='py-3' />
          </NavLink>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden 
            ${isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                : ""
              }
          `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-black px-4 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
              ? "visible opacity-100 backdrop-blur-sm"
              : "invisible opacity-0"
              }`}
          >
            <li role="none" className="flex items-stretch">

              <div className={pathname === "/Domains" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
                <NavLink to='/Domains'>
                  Domains
                </NavLink>
              </div>

            </li>
            <li role="none" className="flex items-stretch">
              <div className={pathname === "/Events" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
                <NavLink to='/Events'>
                  Events
                </NavLink>
              </div>
            </li>
            <li role="none" className="flex items-stretch">
              <div className={pathname === "/Projects" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
                <NavLink to='/Projects'>
                  Projects
                </NavLink>
              </div>
            </li>
            <li role="none" className="flex items-stretch">
              <div className={pathname === "/Members" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
                <NavLink to='/Members'>
                  Members
                </NavLink>
              </div>
            </li>
          
            <li role="none" className="flex items-stretch">
              <div className={pathname === "/Blogs" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
              <Link to="https://medium.com/@uipathcommunitykiit" target="_blank" >
                  Blogs
                  </Link>
              </div>
            </li>
          
            <li role="none" className="flex items-stretch">
              <div className={pathname === "/Gallery" ? "flex items-center text-orange-600 py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4" : "flex items-center text-white py-4 transition-colors duration-300 hover:text-orange-500 focus:text-orange-600 focus:outline-none focus-visible:outline-none lg:px-4"}>
                <NavLink to='/Gallery'>
                  Gallery
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
