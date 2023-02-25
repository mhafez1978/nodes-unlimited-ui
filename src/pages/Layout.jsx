import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import LoggedOutNavigation from '../components/LoggedOutNavigation';

function Layout() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xxlg" sx={{ backgroundColor: 'tomato' }}>
        <LoggedOutNavigation />
      </Container>
    </>
  );
}

export default Layout;
