import React, { useState } from 'react'
import './Form.css'

const Form = ({saveTask}) => {
	const [taskName, setTaskName] = useState('')
	const [taskDetails, setTaskDetails] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()

		if (!taskName || !taskDetails) {
			alert('Complete Task details')
		} else {
			saveTask({ taskName, taskDetails })
		}
		
		setTaskName('')
		setTaskDetails('')
	}

  return (
		<form action="" className="form" onSubmit={submitHandler}>
			<div className="form-controls">
				<label htmlFor="taskName"> Task Name: </label>
				<input
					type="text"
					name="taskName"
					id="taskName"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
					placeholder="Enter Task Name"
					autoComplete='off'
				/>
			</div>

			<div className="form-controls">
				<label htmlFor="taskDetails"> Task Details: </label>
				<input
					type="text"
					name="taskDetails"
					id="taskDetails"
					value={taskDetails}
					onChange={(e) => setTaskDetails(e.target.value)}
					placeholder="Enter Task Details"
					autoComplete='off'
				/>
			</div>

			<input type="submit" value="Save Task" className="btn" />
		</form>
  );
}

export default Form