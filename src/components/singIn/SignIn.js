import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./SignIn.css"

function SignIn() {

	const { loginWithRedirect, isAuthenticated} = useAuth0();

    return (
		!isAuthenticated && (
			<button className= "btn" onClick={() => loginWithRedirect()}>
				Sign In
			</button> 
		)
		);
	}

	export default SignIn;






