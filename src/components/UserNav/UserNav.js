import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
import { Button } from 'components/Button/Button';
import { UserNavWrapper, UserNavHello } from './UserNavStyled';

export const UserNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserMail);

  return (
    <UserNavWrapper>
      <UserNavHello>Hello, {name}</UserNavHello>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        text={'Log Out'}
      />
    </UserNavWrapper>
  );
};
