import Link from 'next/link';

export default function Jumbotron() {
  const jumbo = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/assets/images/jumbotron-bg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',

    textShadow: '3px 3px 2px rgba(0, 0, 0, 1)',
  };

  const noTextShadow = {
    textShadow: 'none',
  };
  return (
    <div className='pt-5 mb-md-4 text-md-end text-sm-start' style={jumbo}>
      <div className='container-fluid h-100 d-flex flex-column justify-content-around mt-5 py-3 py-sm-3 py-md-5'>
        <h1 className='display-3 fw-bold'>SummitQuest</h1>
        <div className='col-md-9 fs-4 mt-md-5 text-start'>
          Welcome to SummitQuest, your go-to resource for discovering the splendor of
          national parks and conquering majestic mountains! Immerse yourself in the
          wonders of nature as you embark on unforgettable adventures in the great
          outdoors. Whether you&apos;re a seasoned mountaineer or a nature enthusiast
          seeking a tranquil escape, we&apos;ve got the perfect destination waiting for
          you.
          <div
            className='mt-5 d-flex flex-column flex-sm-row justify-content-sm-evenly align-items-between'
            style={noTextShadow}>
            <Link href={'/nationalparks'} className='btn btn-success fs-4'>
              National Parks<i className='bi bi-box-arrow-up-right ms-2'></i>
            </Link>
            <Link href={'/mountains'} className='btn btn-success fs-4 mt-3 m-sm-0'>
              Mountains<i className='bi bi-box-arrow-up-right ms-2'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
