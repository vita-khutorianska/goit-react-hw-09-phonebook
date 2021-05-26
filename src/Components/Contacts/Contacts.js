import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContact } from '../../Redux/Phonebook/operationsApi';
// import { getLoading } from '../../Redux/Phonebook/phonebook-selectors';
import FormPhonebook from '../ContactForm';
import ContactItem from '../ContactList';
import Filter from '../Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getContact(), [dispatch]));
  return (
    <div>
      <FormPhonebook />
      <Filter />
      <div title="Contacts list">
        <ContactItem />
      </div>
    </div>
  );
};

export default Contacts;
