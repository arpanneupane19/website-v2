import React from 'react';
import '../../src/App.css';
import { FaGithub } from 'react-icons/fa'; 
import { SiInstagram } from 'react-icons/si'; 
import { MdEmail } from 'react-icons/md'; 

function Contact() {
  return (
	<div className='sidebar-icons'>
		<ul class='icons'>
			<li>
				<a href='https://github.com/arpanneupane19' target="__blank"><h3><FaGithub color='black'/></h3></a>
				<a href='https://instagram.com/__arpanneupane__' target="__blank"><h3><SiInstagram color='black'/></h3></a>
				<a href='https://mailto:arpanneupane19@gmail.com' target="__blank"><h3><MdEmail color='black'/></h3></a>
			</li>
		</ul>
	</div>
  );
}

export default Contact;
