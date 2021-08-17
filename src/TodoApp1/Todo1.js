import React, {useState} from 'react'
import TodoForm1 from './TodoForm1';

const Todo1 = ({ todos, completeTodo, removeTodo, updateTodo }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    // <--------===== Rcive edited text func ====--------->

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };

    if(edit.id) {
        return <TodoForm1 edit={edit} onSubmit={submitUpdate}/>
    }
    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)} className='todo-text'>
                    {todo.text}
                </div>
                <div className='icons'>
                    <i className="fas fa-edit" onClick={() => setEdit({id: todo.id, value: todo.text})}></i>
                    <i className="far fa-times-circle" onClick={() => removeTodo(todo.id)}></i>
                </div>
            </div>
    ));
}
export default Todo1;
