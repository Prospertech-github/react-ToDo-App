import React, { useState } from 'react'
import './Form.css'

const Form = ({saveTask}) => {
	const [taskName, setTaskName] = useState('')
	const [taskDetails, setTaskDetails] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()

		if (!taskName) {
			alert('Enter Task Name')
		}
		if (!taskDetails) {
			alert('Enter Details of Task')
		}

		saveTask({ taskName, taskDetails })
		
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
				/>
			</div>

			<input type="submit" value="Save Task" className="btn" />
		</form>
  );
}

export default Form