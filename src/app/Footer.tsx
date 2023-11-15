export default function Footer() {
  return (
    <footer className='container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
      <p className='col-md-4 mb-0 text-body-secondary'>© 2023 Isaac Cortes Hernandez</p>

      <a
        href='/'
        className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='assets/logo/logo.png' alt='logo' width={35} height={35}/>
      </a>

      <ul className='nav col-md-4 justify-content-end'>
        <li className='nav-item'>
          <a href='/' className='nav-link px-2 text-body-secondary'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='/nationalparks' className='nav-link px-2 text-body-secondary'>
            National Parks
          </a>
        </li>
        <li className='nav-item'>
          <a href='/mountains' className='nav-link px-2 text-body-secondary'>
            Mountains
          </a>
        </li>
      </ul>
    </footer>
  );
}
