import React from 'react'
import './Modal.css'

export function BloggyModal ({showBloggy, closeBloggy}) {
	return (
		<div className='modal-container'
			style={{
				transform: showBloggy ? 'translateY(0vh)' : 'translateY(-100vh)',
				visibility: showBloggy ? 'visible' : 'hidden',
				opacity: showBloggy ? 1: 0


			}}
		>
			<div className='modal-header'>
				<h4>Bloggy</h4>
				<span onClick={closeBloggy} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>
				This is a social networking app created using the <a href="https://flask.palletsprojects.com/en/1.1.x/" target="__blank">Flask</a> web framework in <a href="https://python.org" target="__blank">Python</a>.
				Users can create blog posts, update the posts, and delete them. Users have the ability to create a bio about themselves for others to click on as well as setting a profile picture. Users are able to like & comment on other
				users posts.<br></br>
				This web application uses Python as the backend and HTML, CSS, and Bootstrap as the frontend. It is using a <a href="https://www.sqlite.org/index.html" target="__blank">SQLite</a> database. <br></br><br></br>
				The GitHub repository is <a href="https://github.com/arpanneupane19/bloggy-webapp" target="__blank">here! </a>
				The live demo is <a href="https://bloggyapp.pythonanywhere.com" target="__blank">here!</a>
				</p>
			</div>

		</div>
	)
}




export function TodosModal ({showTodos, closeTodos}) {
	return (
		<div className='modal-container'
			style={{
				transform: showTodos ? 'translateY(0vh)' : 'translateY(-100vh)',
				visibility: showTodos ? 'visible' : 'hidden',
				opacity: showTodos ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Todos</h4>
				<span onClick={closeTodos} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>
				This is a Todo-List-App created using the <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> web framework in <a href="https://python.org">Python</a>.
				Users can sign up, create todos, and mark them complete once they have been finished.
				This app is able to perform CRUD operations.
				This web application uses Python as the backend and HTML, CSS, and Bootstrap as the frontend. It is using a <a href="https://www.sqlite.org/index.html">SQLite</a> database.<br></br><br></br>
				The GitHub repository is <a href="https://github.com/arpanneupane19/bloggy-webapp." target="__blank">here!</a>
				The live demo is <a href="https://todosapp.pythonanywhere.com" target="__blank">here!</a>

				</p>
			</div>

		</div>
	)
}


export function WebsiteModal ({showSite, closeSite}) {
	return (
		<div className='modal-container'
			style={{
				transform: showSite ? 'translateY(0vh)' : 'translateY(-100vh)',
				visibility: showSite ? 'visible' : 'hidden',
				opacity: showSite ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Website</h4>
				<span onClick={closeSite} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>
					This is the second version of my portfolio site. I built it using <a href="https://reactjs.org">ReactJS</a>. You can view the code <a href="https://github.com/arpanneupane19/personal-websitev2" target="__blank">here!</a><br>
					</br><br></br>
					<a href=''>Feel free to leave any feedback!</a>

				</p>
			</div>

		</div>
	)

}

export function GamesModal ({showGames, closeGames}) {
	return (
		<div className='modal-container'
			style={{
				transform: showGames ? 'translateY(0vh)' : 'translateY(-100vh)',
				visibility: showGames ? 'visible' : 'hidden',
				opacity: showGames ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Games</h4>
				<span onClick={closeGames} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>
					These are my games! I have created 7 games so far and they are all available on both
					Windows and macOS. I originally started learning Python by creating games.
					6 of these games were created using the Pygame library, and the Snake game was made
					with the built in Turtle module in Python.
					You can check my games out <a href="https://arpanneupane.itch.io/" target="__blank">here! </a>
					GitHub repositories are <a href="https://github.com/arpanneupane19?tab=repositories" target="__blank">here</a> for some of the games.
				</p>
			</div>

		</div>

	)
}

export function PWGenModal ({showPWGen, closePWGen}) {
	return (
		<div className='modal-container'
			style={{
				transform: showPWGen ? 'translateY(0vh)' : 'translateY(-100vh)',
				visibility: showPWGen ? 'visible' : 'hidden',
				opacity: showPWGen ? 1: 0
				
			}}
		>
			<div className='modal-header'>
				<h4>Password Generator</h4>
				<span onClick={closePWGen} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>
					
					This is a Password Generator created using <a href="https://www.javascript.com/">JavaScript</a>.
					You can click a button and it will randomly generate a secure password and you can click the copy button to copy the password.
					The GitHub repository is <a href="https://github.com/arpanneupane19/passwordgenerator" target="__blank">here!</a><br></br>
					The live demo is <a href="https://passwordgenarpan.netlify.app" target="__blank">here!</a>

				</p>
			</div>

		</div>

	)
}