import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../Redux/Auth/auth_selector';
import { logOut } from '../../Redux/Auth/auth_operation';
import styles from '../../Routes/Route.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());
  const email = useSelector(state => getUserEmail(state));

  return (
    <div className={styles.container}>
      <span className={styles.name}> {email}</span>
      <button type="button" className={styles.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
