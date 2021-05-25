import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../../Redux/Phonebook/operationsApi';
import { getLoading } from '../../Redux/Phonebook/phonebook-selectors';
import FormPhonebook from '../ContactForm';
import ContactItem from '../ContactList';
import Filter from '../Filter';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div>
        <FormPhonebook />
        <Filter />
        <div title="Contacts list">
          <ContactItem />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
// export default Contacts;
