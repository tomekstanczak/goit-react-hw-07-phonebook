import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getContactsFromApi } from '../redux/operations';
import { Buttons } from './Buttons/Buttons';
import css from './App.module.css';
import { Screen } from './Screen/Screen';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsFromApi());
  }, [dispatch]);

  return (
    <div className={css.shape}>
      <div className={css.insideBorder}></div>
      <h1>NOKIA</h1>
      <Screen />
      <Buttons />
    </div>
  );
};
