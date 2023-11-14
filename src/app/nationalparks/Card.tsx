type NationalPark = {
  locationName: string;
  locationID: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  phone: string;
  fax: string;
  latitude: number;
  longitude: number;
  location: object;
};

export default function Card({
  locationName,
  locationID,
  address,
  city,
  state,
  zipCode,
  phone,
  fax,
  latitude,
  longitude,
  location,
}: NationalPark) {
  return (
    <div className='card h-100'>
      <div className='card-header d-flex align-items-center justify-content-between'>
        <span>{locationName}</span>
        <span>{locationID.toUpperCase()}</span>
      </div>
      <div className='card-body'>
        {address != '0' ? <div className='card-title'>{address}</div> : null}
        <div className='card-subtitle text-secondary'>
          {city}, {state} {zipCode != 0 ? zipCode : null}
        </div>
        {phone != '0' ? <div className='card-text'>Phone: {phone}</div> : null}
        {fax != '0' ? <div className='card-text'>Fax: {fax}</div> : null}
        <div className='card-text'>Latitude: {latitude}</div>
        <div className='card-text'>Longitude: {longitude}</div>
      </div>
    </div>
  );
}
