import React from 'react';
import '../../src/App.css';
import { FaGithub } from 'react-icons/fa'; 
import { SiInstagram } from 'react-icons/si'; 
import { MdEmail } from 'react-icons/md'; 

function Contact() {
  return (
	<div className='sidebar-icons'>
		<ul className='icons'>
			<li>
				<a href='https://github.com/arpanneupane19' target="__blank"><FaGithub color='black'/></a><br></br>
				<a href='https://instagram.com/__arpanneupane__' target="__blank"><SiInstagram color='black'/></a><br></br>
				<a href='mailto:arpanneupane19@gmail.com' target="__blank"><MdEmail color='black'/></a><br></br>
			</li>
		</ul>
	</div>
  );
}

export default Contact;
