import { useEffect, Suspense,  lazy} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';

import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRouter';

import { GlobalStyle } from 'common/GlobalStyle'
import {Header} from './Header/Header'

import { HomeView } from 'views';
import { RegisterView } from 'views';
import { LoginView } from 'views';
import { ContactsView } from 'views';

// const loader = componentName => {
//   return lazy(() =>
//     import(`../views/${componentName}`).then(module => ({
//       default: module[componentName],
//     })));
// };

// const HomeView = loader('HomeView');
// const RegisterView = loader('RegisterView');
// const LoginView = loader('LoginView');
// const ContactsView = loader('ContactsView')



export const App = () => {
  const dispatch = useDispatch();
  // const isLoadingCurrentUser = useSelector(authSelectors.getIsLoadingCurrentUser)
  


  useEffect(() => {
     dispatch(authOperations.fetchCurrentUser());
  }, [dispatch])

  return (
    //!isLoadingCurrentUser && (
<>
    
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={
            <PublicRoute restricted navigateTo="/contacts">
              <HomeView />
            </PublicRoute>
          }
           />   
            
            <Route path="register" element={
               <PublicRoute restricted navigateTo="/contacts">
                <RegisterView />
              </PublicRoute>
            } />
            <Route path="login" element={
              <PublicRoute restricted navigateTo="/contacts">
                <LoginView />
              </PublicRoute>
            } />
            <Route path="contacts" element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
         
        </Routes>

    </>
      //)
  );
  
};