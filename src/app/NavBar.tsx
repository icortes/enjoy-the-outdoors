import Link from "next/link";

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/'>
          SummitQuest
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
            <Link className='nav-link' href='/nationalparks'>
              National Parks
            </Link>
            <Link className='nav-link' href='/mountains'>
              Mountains
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
