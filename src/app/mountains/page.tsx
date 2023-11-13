'use client';

import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

export default function Mountains() {
  const [mountainData, setMountainData] = useState<any[]>([]);
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
