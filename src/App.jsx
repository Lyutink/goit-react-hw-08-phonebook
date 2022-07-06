import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route, Navigate } from 'react-router-dom';

import Container from './components/Container'
//import { HomeView} from './views';
import { AppBar }  from './components/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRouter';


const loader = componentName => {
  return lazy(() =>
    import(`./views/${componentName}`).then(module => ({
      default: module[componentName],
    })));
};

const HomeView = loader('HomeView');
const RegisterView = loader('RegisterView');
const LoginView = loader('LoginView');
const ContactsView = loader('ContactsView')



export default function App () {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(authSelectors.getIsLoadingCurrentUser)
  


  useEffect(() => {
     dispatch(authOperations.refreshUser());
  }, [dispatch])

  return (
      <Container>
      {!isLoadingUser && (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={
             // <PublicRoute restricted navigateTo="/contacts">
                <HomeView />
              // </PublicRoute>
            } />
            <Route path="register" element={
             //  <PublicRoute restricted navigateTo="/contacts">
                <RegisterView />
             // </PublicRoute>
            } />
            <Route path="login" element={
             // <PublicRoute restricted navigateTo="/contacts">
                <LoginView />
             // </PublicRoute>
            } />
            <Route path="contacts" element={
            //  <PrivateRoute>
                <ContactsView />
            //  </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
      </Container>
  );
  // return (
  //   !isLoadingUser && (
  //   <Routes>
  //     <Route path="/" element={<AppBar />}>
  //      <Route index element={
  //       <PublicRoute restricted navigateTo="/contacts">
  //         <HomeView />
  //       </PublicRoute>} />

  //       <Route path="register" element={
  //       <PublicRoute restricted navigateTo="/contacts">
  //         <Register />
  //       </PublicRoute>} />

  //       <Route path="login" element={
  //       <PublicRoute restricted navigateTo="/contacts">
  //         <Login />
  //       </PublicRoute>} />
  //       <Route path="contacts" element={
  //       <PrivateRoute>
  //         <Contacts />
  //       </PrivateRoute>}/>
  //       <Route path="*" element={<Navigate to="/" />} />
  //     </Route>
  //   </Routes>
  //   )
  // );
};