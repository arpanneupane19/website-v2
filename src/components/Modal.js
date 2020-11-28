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
				users posts.
				This web application uses Python as the backend and HTML, CSS, and Bootstrap as the frontend. It is using a <a href="https://www.sqlite.org/index.html" target="__blank">SQLite</a> database. <br></br>
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
				This web application uses Python as the backend and HTML, CSS, and Bootstrap as the frontend. It is using a <a href="https://www.sqlite.org/index.html">SQLite</a> database.
				The GitHub repository is <a href="https://github.com/arpanneupane19/bloggy-webapp." target="__blank">here!</a><br></br>
				The live demo is <a href="https://todosapp.pythonanywhere.com" target="__blank">here!</a>

				</p>
			</div>

		</div>
	)
}


export function WebsiteModal ({showSite, closeSite}) {
	
}