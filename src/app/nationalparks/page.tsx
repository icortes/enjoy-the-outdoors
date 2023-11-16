'use client';

import CardList from './CardList';
import Search from './Search';
import { useSelectedStateStore } from '../store/SelectedState';
import { useSelectedParkTypeStore } from '../store/SelectedParkTypeState';

export default function NationalParks() {
  const selectedState = useSelectedStateStore();
  const selectedParkTypeState = useSelectedParkTypeStore();

  const backgroundImage = {
    backgroundImage: 'url(/assets/images/nationalparksbg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    height: '100%',
  };

  return (
    <main className='py-5' style={backgroundImage}>
      <div
        className='container-md pt-5'
        style={{ position: 'relative', minHeight: '100vh' }}>
        <Search />
        <div className='row mt-3 g-3'>
          <CardList
            locationName={selectedParkTypeState.selectedParkType}
            state={selectedState.selectedState}
          />
        </div>
      </div>
    </main>
  );
}
