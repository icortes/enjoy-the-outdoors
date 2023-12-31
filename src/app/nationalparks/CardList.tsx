'use client';

import { useEffect, useState } from 'react';
import { useSearchByStore } from '../store/SearchByState';
import { useSelectedParkTypeStore } from '../store/SelectedParkTypeState';
import { useSelectedStateStore } from '../store/SelectedState';
import Card from './Card';

type NationalPark = {
  id: string;
  LocationName: string;
  LocationID: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: number;
  Phone: string;
  Fax: string;
  Latitude: number;
  Longitude: number;
  Location: object;
  Visit?: string;
};

type NationalParkNamesAndStates = {
  parkType: string;
  state: string;
};

export default function CardList({ parkType, state }: NationalParkNamesAndStates) {
  const [mountainData, setMountainData] = useState<NationalPark[]>([]);
  const searchByState = useSearchByStore();
  const parkTypeState = useSelectedParkTypeStore();
  const stateState = useSelectedStateStore();

  useEffect(() => {
    if (searchByState.searchBy == 'by location') {
      fetch(`api/nationalparks/state/${state}`)
        .then((response) => response.json())
        .then((data) => setMountainData(data));
    } else {
      fetch(`api/nationalparks/parktype/${parkType}`)
        .then((response) => response.json())
        .then((data) => setMountainData(data));
    }
  }, [parkType, parkTypeState, searchByState, state, stateState]);

  return (
    <>
      {mountainData
        ? mountainData.map((mountain) => (
            <div className='col-12 col-sm-6 col-md-4' key={mountain.id}>
              <Card
                locationName={mountain.LocationName}
                locationID={mountain.LocationID}
                address={mountain.Address}
                city={mountain.City}
                state={mountain.State}
                zipCode={mountain.ZipCode}
                phone={mountain.Phone}
                fax={mountain.Fax}
                latitude={mountain.Latitude}
                longitude={mountain.Longitude}
                location={mountain.Location}
                visit={mountain.Visit}
              />
            </div>
          ))
        : null}
    </>
  );
}
