import React from 'react'
import './Email.css';
import Navbar from './Navbar.js';

function Email() {
	return (
	<div className='app'>
		<div className='header'>
			<h2>Email me!</h2>
		</div>

		<div className='form'>
			<form method='POST'>
				<input type='text'></input>
			</form>
		</div>
	</div>

	)
}

export default Email
