import SunriseSunset from './SunriseSunset';
import { Mountain } from './page';

export default function MountainCard({ mountain }: { mountain: Mountain }) {
  return (
    <div>
      {mountain ? (
        <div className='card mt-5'>
          <div className='row g-0'>
            <div className='col-sm-12 col-md-5'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='img-fluid h-100 w-100'
                src={`assets/images/${mountain.img}`}
                alt={`image of ${mountain.name}`}
              />
            </div>
            <div className='col-md-7'>
              <div className='card-body'>
                <div className='card-title'>{mountain.name}</div>
                <div className='card-subtitle'>Effort: {mountain.effort}</div>
                <div className='card-subtitle'>Elevation: {mountain.elevation}</div>
                <div className='card-text mt-3'>{mountain.desc}</div>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <SunriseSunset coords={mountain.coords} />
          </div>
        </div>
      ) : (
        <div className='d-flex justify-content-center mt-5'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
