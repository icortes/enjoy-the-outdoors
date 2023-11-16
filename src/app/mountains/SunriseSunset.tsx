import { useEffect, useState } from 'react';

type Coords = {
  lat: number;
  lng: number;
};

type SunriseSunset = {
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  day_length: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  solar_noon: string;
  sunrise: string;
  sunset: string;
};

export default function SunriseSunset({ coords }: { coords: Coords }) {
  const [sunriseSunset, setSunriseSunset] = useState<SunriseSunset>();

  useEffect(() => {
    fetch(
      `https://api.sunrise-sunset.org/json?lat=${coords.lat}&lng=${coords.lng}&date=today`
    )
      .then((res) => res.json())
      .then((data) => setSunriseSunset(data.results));
  }, [coords]);

  return sunriseSunset ? (
    <div className='row'>
      <div className='col-6'>
        <div className='d-flex align-items-center justify-content-center'>
          <i className='bi bi-sunrise fs-1'></i>
          <p className='my-auto ms-3 fs-3'>{sunriseSunset.sunrise} (GMT)</p>
        </div>
      </div>
      <div className='col-6'>
        <div className='d-flex align-items-center justify-content-center'>
          <i className='bi bi-sunset fs-1'></i>
          <p className='my-auto ms-3 fs-3'>{sunriseSunset.sunset} (GMT)</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='d-flex justify-content-center mt-5'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
