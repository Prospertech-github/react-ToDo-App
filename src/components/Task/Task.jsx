import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Task.css';

const Task = ({ task, deleteTask }) => {
	return (
		<div className="task" onClick={() => console.log(task)}>
			<div className="taskinfo">
				<h3> {task.taskName} </h3>
				<p> {task.taskDetails} </p>
			</div>

			<MdDelete className="icon" onClick={() => deleteTask(task.id)} />
		</div>
	);
};

Task.defaultProps = {
	taskName: 'My Task',
	taskDetails: 'Friday by 2PM',
};

export default Task;
