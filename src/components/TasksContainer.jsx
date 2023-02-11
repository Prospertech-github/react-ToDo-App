import React from 'react';
import Task from './Task/Task';

const TasksContainer = ({ tasks }) => {

	return (
		<div
			className="taskContainer"
			style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}
		>

			{tasks.map((task, index) => {
				return <Task key={'TSK' + index} taskName={task.taskName} taskDetails={task.taskDetails} />
			})}

		</div>
	);
};

export default TasksContainer;
