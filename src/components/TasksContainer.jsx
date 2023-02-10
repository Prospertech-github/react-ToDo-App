import React from 'react';
import Task from './Task/Task';

const TasksContainer = () => {
	return (
		<div
			className="taskContainer"
			style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
		>
			<Task taskName="First Task" taskDetails="Friday by 7PM" />
			<Task taskName="Second Task" taskDetails="Saturday by 2PM" />
			<Task />
		</div>
	);
};

export default TasksContainer;
