import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import delete_icon from './assets/delete.png'
import './ToDoItems.css';


   const ToDoItems = ({text, id , isComplete, deleteTodo,toggle})=>{

    return(
        <div className="mainContainer">
          <div onClick={()=>{toggle(id)}} className='InputValues'>
            <img className='tickImg' src={isComplete ? tick : not_tick} alt='' />
            <p className={isComplete ? 'text' : 'textStyle'}>{text}</p>
            <img onClick={()=>{deleteTodo(id)}} className='deleteImg' src={delete_icon} alt='' />
          </div>
        </div>
    )

}

export default ToDoItems;