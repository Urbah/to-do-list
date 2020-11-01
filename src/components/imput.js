import React, {useState} from 'react';
import DisplayTasks from './DisplayTasks'
import ItemLeft from './ItemLeft';

const ImputTask = (props) =>{
    const [valueInput, setValueInput] = useState('');
    const [tasks, setTasks ] = useState([]);
    const validador = (e) =>{
        if(e.keyCode === 13){
            let newElement = e.target.value;
            setValueInput(newElement);
            e.target.value = '';
        }
     };
    const deleteTask = (value, index) =>{
      setTasks(tasks.filter( function( e, i ) {
        return i !== index;
    }));
     };
    return (
        <>
            <form className='form-todo' onSubmit={(e) => {
                 setTasks(tasks.concat(valueInput))
                 e.preventDefault()
            }}>
                <input type='text' className='input-form-todo' placeholder='Give me a task' onKeyDown={(e)=>{validador(e)}}></input>
            </form>
            <DisplayTasks tasks={tasks} fndeleteTask={deleteTask}/> 
            <ItemLeft tasks={tasks}/>
        </>
    )
}
export default ImputTask;
