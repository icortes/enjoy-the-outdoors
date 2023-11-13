export default function Dropdown({ mountainNames }: { mountainNames: any[] }) {
  return (
    <div className='form-floating mt-3'>
      <select className='form-select' id='mountainsSelect' defaultValue={''}>
        {mountainNames.map((mountain) => {
          return (
            <option key={mountain} value={mountain}>
              {mountain}
            </option>
          );
        })}
      </select>
      <label htmlFor='mountainsSelect'>Mountains</label>
    </div>
  );
}
