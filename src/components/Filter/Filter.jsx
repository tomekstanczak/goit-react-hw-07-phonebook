import { useDispatch } from 'react-redux';
import { filtering } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  function handleChange(e) {
    let filteringValue = e.target.value;
    dispatch(filtering(filteringValue));
  }

  return (
    <div className={css.filterStyle}>
      <form>
        <input onChange={handleChange} placeholder="Find contact" />
      </form>
    </div>
  );
};
