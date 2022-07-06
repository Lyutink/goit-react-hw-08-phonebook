import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

// import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// // import {
// //   PagesContainer,
// //   HomePageContainer,
// //   HomePageBtn,
// //   ColStyled,
// // } from '../components/styles/StyledComponentsStyles';
// import {
//   ViewContainer,
//   HomeViewContainer,
//   HomePageBtn,
//   ColStyled,
// } from '../components/styles/ComponentsStyles';

// export const HomeView = () => {
//   return (
//     <ViewContainer>
//       <Container>
//         <HomeViewContainer>
//           <Col>
//             <h2>About us</h2>
//             <p>
//               This is the App for you to save, seach, and filter contacts of
//               your friends! Register and stay in touch with all friend whenever
//               you want!
//             </p>
//           </Col>
//           <ColStyled>
//             <LinkContainer to="/login">
//               <HomePageBtn variant="outline-primary" size="lg">
//                 Sign in
//               </HomePageBtn>
//             </LinkContainer>
//             <LinkContainer to="/register">
//               <HomePageBtn variant="outline-info" size="lg">
//                 Sign up
//               </HomePageBtn>
//             </LinkContainer>
//           </ColStyled>
//         </HomeViewContainer>
//       </Container>
//     </ViewContainer>
//   );
// };
