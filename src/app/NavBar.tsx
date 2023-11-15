'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [navbar, setNavBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (window.scrollY >= 79) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
    //79 navbar height
  };

  const handleResize = () => {
    if (window.innerWidth <= 575) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    //575 mobile window size
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('resize', handleResize);
  }, []);

  function Navlinks({ textColor }: { textColor: string }) {
    return (
      <div className='navbar-nav d-flex justify-content-center w-100'>
        <Link
          className={
            navbar ? 'nav-link fs-4 text-success-emphasis' : `nav-link fs-4 ${textColor}`
          }
          href='/'>
          Home
        </Link>
        <Link
          className={
            navbar ? 'nav-link fs-4 text-success-emphasis' : `nav-link fs-4 ${textColor}`
          }
          href='/nationalparks'>
          National Parks
        </Link>
        <Link
          className={
            navbar ? 'nav-link fs-4 text-success-emphasis' : `nav-link fs-4 ${textColor}`
          }
          href='/mountains'>
          Mountains
        </Link>
      </div>
    );
  }

  return (
    <nav
      className={
        navbar
          ? `navbar navbar-expand-sm bg-${
              isMobile ? 'body-secondary' : 'body-secondary'
            } fixed-top`
          : `navbar navbar-expand-sm bg-${
              isMobile ? 'body-secondary' : 'transparent'
            } fixed-top`
      }>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='assets/logo/logo.png'
            alt='logo'
            className='d-inline-block align-text-top'
            width={50}
            height={50}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbar'
          aria-controls='navbar'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbar'>
          {pathname == '/' ? (
            <Navlinks textColor={'text-white'} />
          ) : (
            <Navlinks textColor={'text-black'} />
          )}
        </div>
      </div>
    </nav>
  );
}
