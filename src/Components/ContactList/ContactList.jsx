import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../Redux/Phonebook/operationsApi';
import { getUniqContact } from '../../Redux/Phonebook/phonebook-selectors';
const ContactList = ({ onDeleteContact, contacts }) => (
  <div className={styles.contact}>
    ContactList
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="submit"
              className={styles.contact_btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: getUniqContact(state),
});
const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
