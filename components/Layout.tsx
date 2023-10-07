import { Container, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import NavBar from './NavBar';

/**
 * 
 */
export default function Layout({ children, title }: any) {
  // const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Head>
        <title>{title || process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: '100vh',
        }}
      >
        {/* <Header open={isOpen} toggleDrawer={toggleDrawer} links={top_links} /> */}
        <NavBar />

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '100%',
          }}
        >
          <Box sx={{ py: 4 }}>
            <Toolbar />
            {children}
          </Box>
          <Box sx={{ pt: 2 }}>
            {/* <Footer links={footer_links} icons={footer_icons} /> */}
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
