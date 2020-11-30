import React from 'react'
import './Email.css';


function Email() {
	return (
	<div className='app'>
		<div className='header'>
			<h2>Email me!</h2>
		</div>
		<div className='form'>
			<form method='POST'>
				<input type='text' placeholder='First Name'></input>
				<input type='text' placeholder='Last Name'></input>
				<div className='email'>
					<input type='text' placeholder='Your Email Address'></input>
					<textarea placeholder='Email Body'></textarea>
				</div>
				<div className='submit'>
					<input type='submit' value='Send Email'></input>
				</div>
			</form>

		</div>
	</div>

	)
}

export default Email
