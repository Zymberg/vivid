import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function SignOut() {

    const { logout, isAuthenticated} = useAuth0();

    return (
		isAuthenticated && (
			<button className="btn" onClick={() => logout()}>
				Sign Out 
			</button>
		)
		);
}

export default SignOut;