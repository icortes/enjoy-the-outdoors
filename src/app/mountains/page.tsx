'use client';

import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

type Mountain = {
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

  useEffect(() => {
    fetch('api/mountains')
      .then((res) => res.json())
      .then((data) => setMountainData(data));
  }, []);

  return (
    <main className='container-md'>
      <Dropdown mountainNames={mountainNames} />
    </main>
  );
}
