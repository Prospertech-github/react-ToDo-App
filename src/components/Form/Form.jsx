import React from 'react'
import './Form.css'

const Form = () => {
  return (
		<form action="" className='form'>
			<div className="form-controls">
				<label htmlFor="taskName"> Task Name: </label>
				<input type="text" name="taskName" id="taskName" placeholder='Enter Task Name'/>
			</div>

			<div className="form-controls">
				<label htmlFor="taskDetails"> Task Details: </label>
				<input type="text" name="taskDetails" id="taskDetails" placeholder='Enter Task Details'/>
			</div>
		</form>
  );
}

export default Form