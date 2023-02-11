import React from 'react';
import Task from './Task/Task';

const TasksContainer = ({ tasks, deleteTask }) => {

	return (
		<div
			className="taskContainer"
			style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
		>
			{tasks.map((task, index) => {
				return <Task key={'TSK' + index} task={task} deleteTask={deleteTask} />
			})}
		</div>
	);
};

export default TasksContainer;
