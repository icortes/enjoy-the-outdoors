'use client';

import { SetStateAction, useState } from 'react';
import prisma from '../../../prisma/prisma';

export default function NationalParks() {
  // const parks = await prisma.national_park_data.findMany({});
  // console.log(parks);
  const searchOptions = ['by location', 'by park type'];
  let [searchBy, setSearchBy] = useState('by location');

  function handleOptionChange(event: {
    target: { value: SetStateAction<string> };
  }): void {
    setSearchBy(event.target.value);
    console.log(event.target.value);
  }

  return (
    <main className='container-md'>
      <div className='input-group'>
        <span className='input-group-text'>Search by</span>
        <select className='input-group-text' id='search-option' onChange={handleOptionChange}>
          {searchOptions.map((_option) => {
            return (
              <option key={_option} value={_option}>
                {_option}
              </option>
            );
          })}
        </select>
      </div>
    </main>
  );
}
