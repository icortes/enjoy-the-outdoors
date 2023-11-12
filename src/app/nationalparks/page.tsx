'use client';

import Card from './Card';
import Search from './Search';
import { useSelectedStateStore } from '../store/SelectedState';
import { useEffect, useState } from 'react';
import { useSearchByStore } from '../store/SearchByState';

export default function NationalParks() {
  let [parkData, setParkData] = useState<any[]>([]);
  const selectedState = useSelectedStateStore();
  console.log(selectedState.selectedState);

  const searchByState = useSearchByStore();
  console.log(searchByState.searchBy);

  useEffect(() => {
    fetch('api/nationalparks')
      .then((res) => res.json())
      .then((parks) => setParkData(parks.data));
  }, []);

  return (
    <main className='container-md'>
      <Search />
      <div className='row mt-3 g-3'>
        {parkData
          .filter((park) => {
            if (selectedState.selectedState == 'All') {
              return park;
            } else if (selectedState.selectedState == park.State) {
              return park;
            }
          })
          .map((park) => {
            return (
              <div className='col-4' key={park.id}>
                <Card
                  locationName={park.LocationName}
                  locationID={park.LocationID}
                  address={park.Address}
                  city={park.City}
                  state={park.State}
                  zipCode={park.ZipCode}
                  phone={park.Phone}
                  fax={park.Fax}
                  latitude={park.Latitude}
                  longitude={park.Longitude}
                  location={park.Location}
                />
              </div>
            );
          })}
      </div>
    </main>
  );
}
