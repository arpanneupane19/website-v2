import React from 'react';
import '../../src/App.css';

function Navbar(props) {
  return (
	<nav className='nav-bar'>
		<label className='logo'><a href={props.home}>ArpanNeupane</a></label>
		<ul>
			<li><a href={props.home}>Home</a></li>
			<li><a href={props.about}>About</a></li>		
			<li><a href={props.projects}>Projects</a></li>
		</ul>
	</nav>
  );
}

export default Navbar;
