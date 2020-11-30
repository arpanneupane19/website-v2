import React, {useState} from 'react';
import '../App.css';
import Typewriter from 'typewriter-effect';
import { FaAngleDown } from 'react-icons/fa'; 
import {BloggyModal, TodosModal, WebsiteModal, GamesModal, PWGenModal, AirQMModal} from './Modal.js';


const strings = ['code.', 'creating.', 'learning.', 'technology.'];

function Main() {
	
	// Bloggy hooks
	const [showBloggy, setShowBloggy] = useState(false);
	const closeBloggy = () => setShowBloggy(false);

	// Todos hooks
	const [showTodos, setShowTodos] = useState(false);
	const closeTodos = () => setShowTodos(false);

	// Site hooks
	const [showSite, setShowSite] = useState(false);
	const closeSite = () => setShowSite(false);

	// Games hooks
	const [showGames, setShowGames] = useState(false);
	const closeGames = () => setShowGames(false);

	// PWGen hooks
	const [showPWGen, setShowPWGen] = useState(false);
	const closePWGen = () => setShowPWGen(false);

	// AirQM hooks
	const [showAirQM, setShowAirQM] = useState(false);
	const closeAirQM = () => setShowAirQM(false);


	return (

		<div className="app">
				{showBloggy || showTodos || showSite || showGames || showPWGen || showAirQM ? <div onClick={() => setShowBloggy(false) || setShowTodos(false) || setShowSite(false) || setShowGames(false) || setShowPWGen(false) || setShowAirQM(false)}className='backdrop'></div>: null}
				

				<section id='home'>
						<div className='name'>
								<h4>Hi, my name is</h4>



								<h1 className='home-header'>Arpan Neupane.</h1>


						</div><br></br><br></br><br></br><br></br>

						<div className='typewrite'>
								<h4>I am a 13 year old programmer with interest in</h4>
								<Typewriter
										options={{
												strings: strings,
												autoStart: true,
												loop: true,
										}}
								/>
						</div>

						<div className='arrow'>
								<h3><a href='#about'><FaAngleDown color='black'/></a></h3>
						</div>

				</section>




				<section id='about'>
						<h1 className='about-header'>
								About
						</h1><br></br>
						<p>
								Hello there! My name is Arpan Neupane and I am a 13 year old programmer.<br></br>
								My interests are in web development, and I mainly use Python as my backend.<br></br>
								I also have created games using Python's Pygame library and GUI applications with Tkinter.<br></br>
								I enjoy creating apps that can help people, make every day life easier, and make it fun.<br></br>
								I'm always looking forward to improve my applications.<br></br><br></br>

								If you have any questions or comments regarding my apps, please feel free to contact me at <a href="mailto:arpanneupane19@gmail.com" target="__blank"><br></br> arpanneupane19@gmail.com</a> or by clicking the mail icon on the sidebar.<br></br><br></br>
						</p><br></br><br></br>


						<h1 className='skills-header'>
								Skills
						</h1><br></br>


						<h3>Languages</h3>
						<p>Python (Proficient) </p>
						<p>HTML/CSS (Proficient) </p>
						<p>JavaScript (Decent) </p>
						<p>Dart (Learning) </p><br></br>


						<h3>Frameworks</h3>
						<p>Flask (Proficient) </p>
						<p>PyGame (Proficient) </p>
						<p>Tkinter (Proficient) </p>
						<p>Bootstrap (Proficient) </p>
						<p>React.js (Decent)</p>
						<p>Flutter (Learning)</p>

				</section>


				<section id='projects'>
						
						<h1 className='projects-header'>Projects</h1>

						<div className='all-projects'>

								<div className='app'>
										<img onClick={() => setShowBloggy(true)} src='/img/bloggy.jpg' alt='Bloggy'/>
										<h4>Bloggy</h4>
										<p>Python/Flask/SQLite</p><br></br>

								</div>


								<div className='app'>
										<img onClick={() => setShowTodos(true)} src='/img/todo.jpg' alt='Todo-List-App'/>
										<h4>Todo-List-App</h4>
										<p>Python/Flask/SQLite</p><br></br>

								</div> 



								<div className='app'>
										<img onClick={() => setShowSite(true)} src='/img/website.jpg' alt='This Website'/>
										<h4>This Website</h4>
										<p>React.js</p><br></br>
								</div> 




								<div className='app'>
										<img onClick={() => setShowGames(true)} src='/img/games.jpg' alt='Games'/>
										<h4>Games</h4>
										<p>Python/PyGame/Turtle</p><br></br>
								</div> 


								<div className='app'>
										<img onClick={() => setShowPWGen(true)} src='/img/passwordgen.jpg' alt='Password Generator'/>
										<h4>Password Generator</h4>
										<p>JavaScript/HTML/CSS</p><br></br>
								</div> 


								<div className='app'>
										<img onClick={() => setShowAirQM(true)} src='/img/airqm.jpg' alt='Air Quality Monitor'/>
										<h4>Air Quality Monitor</h4>
										<p>Python/Tkinter</p><br></br>
								</div> 




						</div>

				
						<BloggyModal
							showBloggy={showBloggy}
							closeBloggy={closeBloggy}
						/>
						<TodosModal
							showTodos={showTodos}
							closeTodos={closeTodos}
						/>
						<WebsiteModal
							showSite={showSite}
							closeSite={closeSite}
						/>
						<GamesModal
							showGames={showGames}
							closeGames={closeGames}
						/>
						<PWGenModal
							showPWGen={showPWGen}
							closePWGen={closePWGen}
						/>
						<AirQMModal
							showAirQM={showAirQM}
							closeAirQM={closeAirQM}
						/>
					<p className='ending'>This took time to make lol.</p>
				</section>

	

		</div>

		
	);
}


export default Main;
