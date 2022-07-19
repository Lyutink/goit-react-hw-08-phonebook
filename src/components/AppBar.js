import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserNav';
import AuthNav from './AuthNav/AuthNav';
import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Navbar } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
// import { UserMenu } from './UserMenu';

// export const AppBar = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand href="#home">HOME</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             {isLoggedIn ? (
//               <UserMenu />
//             ) : (
//               <Navbar.Text>Autorize to continue</Navbar.Text>
//             )}
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <>
//         <Suspense fallback="">
//           <Outlet />
//         </Suspense>
//       </>
//     </>
//   );
// };
