'use client';

import { signal } from '@preact/signals';

import Card from './Card';

export default function NationalParks() {
  const searchOptions = ['by location', 'by park type'];
  let selectedOption = signal('by location');
  const parks: any[] = [];

  fetch('api/nationalparks').then((res) => res.json().then((park) => parks.push(park)));

  console.log(parks);
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
      <div className='row mt-3'>
        <div className='col-4'>
          <Card />
        </div>
      </div>
    </main>
  );
}
