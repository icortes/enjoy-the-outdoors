import { useMountainStore } from '../store/SelectedMountainStore';

export default function Dropdown({ mountainNames }: { mountainNames: any[] }) {
  const mountainStore = useMountainStore();

  function handleOnChange(event: { currentTarget: { value: string } }) {
    mountainStore.updateMountain(event.currentTarget.value);
  }

  return (
    <div className='form-floating mt-3'>
      <select
        className='form-select'
        id='mountainsSelect'
        onChange={handleOnChange}
        value={mountainStore.selectedMountain}>
        {mountainNames.map((mountain, index) => {
          return (
            <option key={index} value={mountain}>
              {mountain}
            </option>
          );
        })}
      </select>
      <label htmlFor='mountainsSelect'>Mountains</label>
    </div>
  );
}
