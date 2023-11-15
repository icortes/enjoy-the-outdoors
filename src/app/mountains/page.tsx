'use client';

import { useMountainStore } from '../store/SelectedMountainStore';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import MountainCard from './MountainCard';

export type Mountain = {
  id: number;
  name: string;
  effort: string;
  desc: string;
  img: string;
  elevation: number;
  coords: { lat: number; lng: number };
};

export default function Mountains() {
  const [mountainData, setMountainData] = useState<Mountain[]>([]);
  const mountainNames = mountainData.map((mountain) => mountain.name);
  const mountainStore = useMountainStore();

  let selectedMountainData = mountainData.find(
    (mountain) => mountain.name == mountainStore.selectedMountain
  )!;

  useEffect(() => {
    fetch('api/mountains')
      .then((res) => res.json())
      .then((data) => setMountainData(data));
  }, []);

  const backgroundImage = {
    backgroundImage: 'url(/assets/images/mountainsbg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top center',
    height: '100vh',
  };

  return (
    <main className='pt-5' style={backgroundImage}>
      <div className='container-md pt-5'>
        <Dropdown mountainNames={mountainNames} />
        <MountainCard mountain={selectedMountainData} />
      </div>
    </main>
  );
}
