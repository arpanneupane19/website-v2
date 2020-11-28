import React from 'react'
import './Modal.css'

export function BloggyModal ({showBloggy, closeBloggy}) {
	return (
		<div className='modal-container'
			style={{
				transform: showBloggy ? 'translateY(0vh)' : 'translateY(-100vh)',
				display: showBloggy ? 'block' : 'none',
				transition: '1.3s'
			}}
		>
			<div className='modal-header'>
				<h4>Bloggy</h4>
				<span onClick={closeBloggy} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>This is Bloggy. It was created using Python, Bootstrap, Flask, and SQLite. Users can create blog posts, they are able to like, comment, and delete posts. They have other features like updating accounts also.</p>
			</div>

		</div>
	)
}




export function TodosModal ({showTodos, closeTodos}) {
	return (
		<div className='modal-container'
			style={{
				transform: showTodos ? 'translateY(0vh)' : 'translateY(-100vh)',
				display: showTodos ? 'block' : 'none',
				transition: '1.3s'
			}}
		>
			<div className='modal-header'>
				<h4>Todos</h4>
				<span onClick={closeTodos} className='close-modal-btn'>x</span>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>This is Bloggy. It was created using Python, Bootstrap, Flask, and SQLite. Users can create blog posts, they are able to like, comment, and delete posts. They have other features like updating accounts also.</p>
			</div>

		</div>
	)
}

