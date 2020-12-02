import React, {useState} from 'react'
import './Email.css';


function Email() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [emailSubject, setEmailSubject] = useState('');
	const [emailBody, setEmailBody] = useState('');

	const mailLink = `mailto:arpanneupane19@gmail.com?subject=${emailSubject}&body=${emailBody}`;


	return (

	<>
	<div className='body'>


		<h2 className='header'>Email me!</h2>

		<div className='email-form'>
			<form>


				<input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name'></input>
				<input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name'></input>
				
					

				

				<input value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder='Email Subject'></input>
				<textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder='Email Body'></textarea>


				<a href={mailLink} >Send Email</a>

				
			</form>
				

		</div>
	</div>
	</>

	)
}

export default Email
