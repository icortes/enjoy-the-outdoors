import { useState } from 'react';
import { Mountain } from './page';

export default function MountainCard({ mountain }: { mountain: Mountain }) {
  const [weatherData, setWeatherData] = useState({});

  return (
    <div>
      {mountain ? (
        <div className='card mt-5'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='card-img-top'
            src={`assets/images/${mountain.img}`}
            alt={`image of ${mountain.name}`}
          />
          <div className='card-body'>
            <div className='card-title'>{mountain.name}</div>
            <div className='card-subtitle'>Effort: {mountain.effort}</div>
            <div className='card-subtitle'>Elevation: {mountain.elevation}</div>
            <div className='card-text mt-3'>{mountain.desc}</div>
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
