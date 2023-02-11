import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
	const [tasks, setTasks] = useState([]);

	const [viewForm, setViewForm] = useState(false);

	const renderFormHandler = () => {
		setViewForm(!viewForm);
	};

	const handleSaveTask = task => {
		const id = Math.floor(Math.random() * 100) + 1;
		const newTask = { id, ...task };

		setTasks([...tasks, newTask]);
	};

	const deleteTaskHandler = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	return (
		<div className="app">
			<Header />
			{tasks.length > 0 ? (
				<TasksContainer tasks={tasks} deleteTask={deleteTaskHandler} />
			) : (
				<h2> PLEASE ADD A TASK </h2>
			)}
			<Button renderForm={renderFormHandler} viewFormState={viewForm} />

			{viewForm && <Form saveTask={handleSaveTask} />}
		</div>
	);
}

export default App;
