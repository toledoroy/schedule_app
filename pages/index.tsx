import React from 'react'
import { useUser, withUser, withUserTokenSSR } from 'next-firebase-auth'
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
// import Link from '../utils/Link';
// import Header from '../components/Header'

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Main = () => {
  const user = useUser();
  return (
    <Box>
      {/* <Header email={user.email} signOut={user.signOut} /> */}
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <Typography variant="h2">Koh Phangan Yoga</Typography>
          {/* <p>
            This page does not require authentication, so it won't redirect to
            the login page if you are not signed in.
          </p> */}
          {/* <p>
            If you remove `getServerSideProps` from this page, it will be static
            and load the authed user only on the client side.
          </p> */}
        </div>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Link href="/venue/yogahouse">
            <img src="/images/logo_yogahouse.png" /> 
            </Link>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}

export const getServerSideProps = withUserTokenSSR()()

export default withUser()(Main)
