import React from 'react'
import { withUser, AuthAction } from 'next-firebase-auth'
import FirebaseAuth from '../components/FirebaseAuth'

/**
 * 
 */
const Auth = () => (
  <div style={{padding: `8px 32px`, textAlign: 'center',}}>
    <h3>Sign in</h3>
    <div style={{    display: 'flex', justifyContent: 'center', margin: 16,}}>
      {/* <p>
        This auth page is <b>static</b>. It will redirect on the client side if
        the user is already authenticated.
      </p> */}
    </div>
    <div>
      <FirebaseAuth />
    </div>
  </div>
)

export default withUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Auth);
