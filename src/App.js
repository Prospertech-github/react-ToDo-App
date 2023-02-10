import './App.css'
import Header from "./components/Header";
import TasksContainer from "./components/TasksContainer";
import Button from "./components/Button/Button";


function App() {
  return (
		<div className="app">
      <Header />
      <TasksContainer />
      <Button />
		</div>
  );
}




export default App;
