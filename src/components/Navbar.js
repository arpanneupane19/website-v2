import React from 'react';
import '../../src/App.css';

function Navbar() {
  return (
	<nav className='nav-bar'>
		<label className='logo'><a href='#'>ArpanNeupane</a></label>
		<ul>
			<li><a href='#home'>Home</a></li>
			<li><a href='#about'>About</a></li>		
			<li><a href='#projects'>Projects</a></li>
		</ul>
	</nav>
  );
}

export default Navbar;
