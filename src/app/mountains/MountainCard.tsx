import { useEffect, useState } from 'react';
import SunriseSunset from './SunriseSunset';
import { useMountainStore } from '../store/SelectedMountainStore';

export type Mountain = {
  id: number;
  name: string;
  effort: string;
  desc: string;
  img: string;
  elevation: number;
  coords: { lat: number; lng: number };
};

export default function MountainCard() {
  const [mountainData, setMountainData] = useState<Mountain>();
  const mountainStore = useMountainStore();

  useEffect(() => {
    fetch(`api/mountain/${mountainStore.selectedMountain}`)
      .then((response) => response.json())
      .then((data) => setMountainData(data));
  }, [mountainStore]);

  return (
    <div>
      {mountainData ? (
        <div className='card mt-5'>
          <div className='row g-0'>
            <div className='col-sm-12 col-md-5'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='img-fluid h-100 w-100'
                src={`assets/images/${mountainData.img}`}
                alt={`image of ${mountainData.name}`}
              />
            </div>
            <div className='col-md-7'>
              <div className='card-body'>
                <div className='card-title'>
                  <h1>{mountainData.name}</h1>
                </div>
                <div className='card-subtitle'>Effort: {mountainData.effort}</div>
                <div className='card-subtitle'>Elevation: {mountainData.elevation}</div>
                <div className='card-text mt-3'>{mountainData.desc}</div>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <SunriseSunset coords={mountainData.coords} />
          </div>
        </div>
      ) : (
        <div className='d-flex justify-content-center mt-5'>
          <div className='spinner-border text-success-emphasis' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
