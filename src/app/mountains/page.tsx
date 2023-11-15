'use client';

import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import MountainCard from './MountainCard';

export type MountainName = {
  name: string;
};

export default function Mountains() {
  const [mountainNameData, setMountainNameData] = useState<MountainName[]>([]);
  const mountainNamesArray = mountainNameData.map((mountain) => mountain.name);

  useEffect(() => {
    fetch('api/mountains')
      .then((res) => res.json())
      .then((data) => setMountainNameData(data));
  }, []);

  const backgroundImage = {
    backgroundImage: 'url(/assets/images/mountainsbg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top center',
  };

  return (
    <main className='pt-5' style={backgroundImage}>
      <div
        className='container-md py-5'
        style={{ position: 'relative', minHeight: '100vh' }}>
        {mountainNameData ? (
          <>
            <Dropdown mountainNames={mountainNamesArray} />
            <MountainCard />
          </>
        ) : null}
      </div>
    </main>
  );
}
