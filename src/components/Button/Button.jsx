import './Button.css'

const Button = ({renderForm, viewForm}) => {
  
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
      <button onClick={renderForm}> {viewForm ? 'Close Form' : 'Add Task'} </button>

    </div>
  )
}

export default Button