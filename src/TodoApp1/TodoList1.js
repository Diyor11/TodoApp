import React, {useState} from 'react';
import TodoForm1 from './TodoForm1';
import Todo1 from './Todo1';

const TodoList1 = () => {

    const [todos, setTodos] = useState([]);

    // ----Add todos func 

    const addTodo = (todo) => {
      if(/^\s*$/.test(todo.text)){
         return;
      }
        setTodos([todo, ...todos]);
        console.log([todo, ...todos]);
    }
    
    // ----- check complete fanc

    const completeTodo =(id) => {
      setTodos(
          todos.map(todo => {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
      )
    }

    // ------===== Remove todo func ======------

    const removeTodo = id => {
      setTodos(
        [...todos].filter(todo => todo.id !== id)
      )
    }

    // =====> -Edit todo func- <======

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      };

      setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    // >>>>>>>>>>> All function finished <<<<<<<<<< //

    return (
        <div id='todo-app'>
          <h2>What's the Plan Today</h2>
          <TodoForm1 onSubmit={addTodo}/>
          <div className='todos'>
            <Todo1 todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
          </div>
        </div>
    )
}
export default TodoList1;