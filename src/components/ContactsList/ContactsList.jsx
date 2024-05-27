import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selector';
import { deleteContact } from '../../redux/operations';
import { Pagination } from 'components/Pagination/Pagination';
import { error, isLoading } from '../../redux/selector';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 1;

  const getFilteringResults = () => {
    if (filterValue === '') {
      return contactsList;
    } else {
      return contactsList.filter(
        contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          contact.phone.includes(filterValue)
      );
    }
  };

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  const filterResults = getFilteringResults();

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filterResults.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const totalPages = Math.ceil(filterResults.length / contactsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const loading = useSelector(isLoading);
  const err = useSelector(error);

  return (
    <div className={css.contactsBox}>
      <Pagination
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
      />
      <div className={css.contactStyle}>
        <h2 className={css.hTextStyle}>Contacts</h2>
        <ul className={css.contactList}>
          {currentContacts.map(contact => (
            <li key={contact.id} className={css.list}>
              {contact.name}:<br /> {contact.phone}
              <br />
              <button
                onClick={() => handleClick(contact.id)}
                className={css.contactButton}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        {loading && !err && <p>Loading...</p>}
      </div>
    </div>
  );
};
