import React, {useState} from 'react'
import './Email.css';


function Email() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailSubject, setEmailSubject] = useState('');
	const [emailBody, setEmailBody] = useState('');

	const mailLink = `mailto:arpanneupane19@gmail.com?subject=${emailSubject}&body=${emailBody}`;
	return (

	<div className='app'>
		<div className='header'>
			<h2>Email me!</h2>
		</div>
		<div className='form'>
			<form>

				
					<input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'></input>
					<input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'></input>

				
				<div className='email'>
					<input value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder='Email Subject'></input>
					<textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder='Email Body'></textarea>
				</div>
				<div className='submit'>
					<a href={mailLink} target='__blank'>Send Email</a>
				</div>
				
			</form>
				

		</div>
	</div>

	)
}

export default Email
