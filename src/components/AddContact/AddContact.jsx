import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './AddContact.module.css';

export const AddContact = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name, number };
    dispatch(addContact(contact));
    form.reset();
  }

  return (
    <div className={css.addContactStyle}>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" placeholder="name" />
        </label>
        <label>
          <input type="text" name="number" placeholder="number" />
        </label>
        <button type="submit">
          Add <br />
          contact
        </button>
      </form>
    </div>
  );
};
