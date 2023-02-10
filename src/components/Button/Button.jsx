import { useState } from 'react'
import './Button.css'

const Button = () => {
  const [level, setLevel] = useState('welcome');
/*
  let level = welcome
  setLevel(word){
    level = word;
  }
  level = good afternoon;
*/
  return (
    <div className='button'>
      <button> Add Task </button>
    </div>
  )
}

export default Button