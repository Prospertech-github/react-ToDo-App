import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
	const [tasks, setTasks] = useState([
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
		},
	])

  const [viewForm, setViewForm] = useState(false);
  
  const renderFormHandler = () => {
    setViewForm(!viewForm)
	}
	
	const handleSaveTask = (task) => {
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { id, ...task }
		
		setTasks([...tasks, newTask])
	}

	return (
		<div className="app">
			<Header />
			<TasksContainer tasks={tasks} />
      <Button renderForm={renderFormHandler} viewFormState={viewForm} />

			{viewForm && <Form saveTask={handleSaveTask} />}
		</div>
	);
}

export default App;
