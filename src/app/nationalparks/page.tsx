'use client';

import { signal } from '@preact/signals';
import prisma from '../../../prisma/prisma';

export default function NationalParks() {
  // const parks = await prisma.national_park_data.findMany({});
  // console.log(parks);
  const searchOptions = ['by location', 'by park type'];
  let selectedOption = signal('by location');

  function handleOptionChange(event: any): void {
    selectedOption = event.target.value;
    console.log(event.target.value);
  }

  return (
    <main className='container-md'>
      <div className='input-group mt-3'>
        <span className='input-group-text'>Search</span>
        <select
          className='input-group-text'
          id='search-option'
          onChange={handleOptionChange}>
          {searchOptions.map((_option) => {
            return (
              <option key={_option} value={_option}>
                {_option}
              </option>
            );
          })}
        </select>
        <input
          className='form-control'
          id='search-input'
          type='text'
          placeholder='search park here...'
        />
      </div>
    </main>
  );
}
