'use client';

import Card from './Card';
import Search from './Search';
import { useSelectedStateStore } from '../store/SelectedState';
import { useEffect, useState } from 'react';
import { useSearchByStore } from '../store/SearchByState';
import { useSelectedParkTypeStore } from '../store/SelectedParkTypeState';

export default function NationalParks() {
  let [parkData, setParkData] = useState<any[]>([]);
  const selectedState = useSelectedStateStore();
  const searchByState = useSearchByStore();
  const selectedParkTypeState = useSelectedParkTypeStore();

  useEffect(() => {
    fetch('api/nationalparks')
      .then((res) => res.json())
      .then((parks) => setParkData(parks.data));
  }, []);

  const backgroundImage = {
    backgroundImage: 'url(/assets/images/nationalparksbg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    height: '100%'
  };

  //ternary operator
  return (
    <main className='py-5' style={backgroundImage}>
      <div className='container-md pt-5' style={{position: 'relative', minHeight: '100vh'}}>
        <Search />
        <div className='row mt-3 g-3'>
          {searchByState.searchBy == 'by location'
            ? parkData
                .filter((park) => {
                  if (selectedState.selectedState == 'All') {
                    return park;
                  } else if (selectedState.selectedState == park.State) {
                    return park;
                  }
                })
                .map((park) => {
                  return (
                    <div className='col-12 col-sm-6 col-md-4' key={park.id}>
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
                        visit={park.Visit}
                        location={park.Location}
                      />
                    </div>
                  );
                })
            : parkData
                .filter((park) => {
                  if (selectedParkTypeState.selectedParkType == 'All') {
                    return park;
                  } else if (
                    park.LocationName.toLowerCase().includes(
                      selectedParkTypeState.selectedParkType.toLowerCase()
                    )
                  ) {
                    return park;
                  }
                })
                .map((park) => {
                  return (
                    <div className='col-12 col-sm-6 col-md-4' key={park.id}>
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
                        visit={park.Visit}
                        location={park.Location}
                      />
                    </div>
                  );
                })}
        </div>
      </div>
    </main>
  );
}
