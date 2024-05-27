import { AddContact } from 'components/AddContact/AddContact';
import css from './Screen.module.css';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const Screen = () => {
  return (
    <div className={css.screen}>
      <AddContact />
      <Filter />
      <ContactsList />
    </div>
  );
};
