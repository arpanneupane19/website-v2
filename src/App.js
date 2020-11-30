import React from 'react';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Main from './components/AllPages.js';
import Email from './components/Email.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
	

	return(
		<Router>
			<Switch>
				<Route exact path='/'>
					<Navbar
					home='/'
					about='/#about'
					projects='#projects'
					/>
					<Contact/>
					<Main/>
				</Route>
				<Route exact path='/contact'>
					<Navbar
					home='/'
					about='/#about'
					projects='/#projects'
					/><br></br>
					<Email/>
				</Route>
			</Switch>
		</Router>


	);
		

}


export default App;
