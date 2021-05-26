import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Redux/Phonebook/phonebook-action';
import { getFilter } from '../../Redux/Phonebook/phonebook-selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.filterChange(e.currentTarget.value));
  const value = useSelector(state => getFilter(state));

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />{' '}
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
