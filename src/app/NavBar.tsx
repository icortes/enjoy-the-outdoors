'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 99) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
    //99
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar
          ? 'navbar navbar-expand-sm bg-body-secondary fixed-top'
          : 'navbar navbar-expand-sm bg-transparent fixed-top'
      }>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='assets/logo/logo.png'
            alt='logo'
            className='d-inline-block align-text-top'
            width={50}
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
          <div className='navbar-nav'>
            <Link className='nav-link fs-4 text-white' href='/'>
              Home
            </Link>
            <Link className='nav-link fs-4 text-white' href='/nationalparks'>
              National Parks
            </Link>
            <Link className='nav-link fs-4 text-white' href='/mountains'>
              Mountains
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
