import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import Button from './components/Button/Button';
import Form from './components/Form/Form';

function App() {
  const [viewForm, setViewForm] = useState(false);
  
  const renderFormHandler = () => {
    setViewForm(!viewForm)
  }

	return (
		<div className="app">
			<Header />
			<TasksContainer />
      <Button renderForm={renderFormHandler} viewFormState={viewForm} />

			{viewForm && <Form />}
		</div>
	);
}

export default App;
