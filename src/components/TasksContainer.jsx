import React from 'react';
import Task from './Task/Task';

const TasksContainer = () => {
	const tasks = [
		{
			id: 1,
			taskName: 'Dentist Appointment',
			taskDetails: 'Friday by 4PM',
		},
		{
			id: 2,
			taskName: 'Date Night With My Ex',
			taskDetails: 'Sunday by 8AM',
		},
		{
			id: 3,
			taskName: 'Talk with Tappi',
			taskDetails: 'Monday by 10AM',
		}
	];


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
