'use client';

import { useSelectedStateStore } from '../store/SelectedState';
import { useSearchByStore } from '../store/SearchByState';

export default function Search() {
  const searchOptions = ['by location', 'by park type'];
  const selectedState = useSelectedStateStore();
  const searchByState = useSearchByStore();

  const locationsArray = [
    'All',
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'DC',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  const parkTypesArray = [
    'All',
    'National Park',
    'National Monument',
    'Recreation Area',
    'Scenic Trail',
    'Battlefield',
    'Historic',
    'Memorial',
    'Preserve',
    'Island',
    'River',
    'Seashore',
    'Trail',
    'Parkway',
  ];

  function handleOptionChange(event: { currentTarget: { value: string } }): void {
    searchByState.updateSearchBy(event.currentTarget.value);
  }

  function handleStateChange(event: { currentTarget: { value: string } }) {
    selectedState.updateState(event.currentTarget.value);
  }

  return (
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

      <select className='input-group-text' id='state-option' onChange={handleStateChange}>
        {searchByState.searchBy == 'by location'
          ? locationsArray.map((location) => {
              return (
                <option key={location} value={location}>
                  {location}
                </option>
              );
            })
          : parkTypesArray.map((type) => {
              return (
                <option key={type} value={type}>
                  {type}
                </option>
              );
            })}
      </select>
    </div>
  );
}
