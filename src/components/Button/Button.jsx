import './Button.css'

const Button = ({renderForm, viewFormState}) => {
  
/*
  const [level, setLevel] = useState('welcome')

  let level = welcome
  setLevel(word){
    level = word;
  }
  level = good afternoon;
*/


  
  return (
		<div className='button'>
			<button
				onClick={renderForm}
				className={viewFormState ? 'btn-norm btn-red' : 'btn-norm'}
			>
				{viewFormState ? 'Close Form' : 'Add Task'}
			</button>
		</div>
  );
}

export default Button