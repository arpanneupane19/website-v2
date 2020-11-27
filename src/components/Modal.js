import React, {props} from 'react'
import './Modal.css'

function Modal ({show, close}, props) {
	return (
		<div className='modal-container'
			style={{
				transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
				display: show ? 'block' : 'none',
				transition: '1.3s'
			}}
		>
			<div className='modal-header'>
				<h4>{props.title}</h4>
				<button onClick={close} className='close-modal-btn'>x</button>
			</div>
			<hr></hr>
			<div class='modal-content'>
				<p>{props.content}</p>
			</div>

		</div>
	)
}

export default Modal;