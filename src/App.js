import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Typewriter from 'typewriter-effect';
import Modal from 'react-modal';

const strings = ['code.', 'creating.', 'learning.', 'technology.'];
function App() {

  return (
    <div className="App">
		<Navbar/>
		<Contact/>

		<div id='home'>
			<div className='name'>
				<h4>Hi, my name is</h4>


				<h1 className='home-header'>Arpan Neupane.</h1>


			</div><br></br><br></br><br></br><br></br>

			<div className='typewrite'>
				<h4>I am a 12 year old programmer with interest in</h4>
				<Typewriter
					options={{
						strings,
						autoStart: true,
						loop: true,
					}}
				/>
			</div>

		</div>




		<div id='about'>
			<h1 className='about-header'>
				About
			</h1><br></br>
			<p>
				Hello there! My name is Arpan Neupane and I am a 12 year old programmer.<br></br>
				My interests are in web development, and I mainly use Python as my backend.<br></br>
				I also have created games using Python's Pygame library and GUI applications with Tkinter.<br></br>
				I enjoy creating apps that can help people, make every day life easier, and make it fun.<br></br>
				I'm always looking forward to improve my applications.<br></br><br></br>

				If you have any questions or comments regarding my apps, please feel free to contact me at <a href="https://mailto:arpanneupane19@gmail.com" target="__blank"><br></br> arpanneupane19@gmail.com</a> or by clicking the mail icon on the sidebar.<br></br><br></br>
			</p><br></br><br></br>


			<h1 className='skills-header'>
				Skills
			</h1><br></br>


			<h3>Languages</h3>
			<p>Python (Proficient) </p>
			<p>HTML/CSS (Proficient) </p>
			<p>JavaScript (Learning) </p>
			<p>Dart (Learning) </p><br></br>


			<h3>Frameworks</h3>
			<p>Flask (Proficient) </p>
			<p>PyGame (Proficient) </p>
			<p>Tkinter (Proficient) </p>
			<p>Bootstrap (Proficient) </p>
			<p>React.js (Learning)</p>

		</div>


		<div>

		</div>


		<div id='projects'>
				<h1 className='projects-header'
				>Projects</h1><br></br><br></br>

				<div className='app'>
					<a href='https://bloggyapp.pythonanywhere.com' target='__blank'><img 
																					src='/img/bloggy.jpg'
																					alt='Bloggy'
																					width='290'

																					height='210'
																					/></a>
					<h4>Bloggy</h4><br></br>				
				</div><br></br>
				

				<div className='app'>
					<a href='https://todosapp.pythonanywhere.com' target='__blank'><img 
																					src='/img/todo.jpg'
																					alt='Todo-List-App'
																					width='290'
																					height='210'

																					/></a>
					<h4>Todo-List-App</h4><br></br>
				</div><br></br>

				<div className='app'>
					<a href='https://arpanneupane.itch.io/' target='__blank'><img 
																					src='/img/games.jpg'
																					alt='Games'
																					width='290'
																					height='210'
																					/></a>
					<h4>Games</h4><br></br>
				</div><br></br>

				<div className='app'>
					<a href='https://passwordgenarpan.netlify.app/' target='__blank'><img 
																					src='/img/passwordgen.jpg'
																					alt='Password Generator'
																					width='290'
																					height='210'
																					/></a>
					<h4>Password Generator</h4><br></br>
				</div><br></br>

				<div className='app'>
					<a href='https://passwordgenarpan.netlify.app/' target='__blank'><img 
																					src='/img/airqm.jpg'
																					alt='Air Quality Monitor'
																					width='290'
																					height='210'
																					/></a>
					<h4>Air Quality Monitor</h4><br></br>
				</div>
		</div>



    </div>

	
  );
}

export default App;
