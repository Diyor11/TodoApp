import React, { useState } from 'react';

const TodoForm1 = ( {onSubmit, edit} ) => {

    const [value, setValue] = useState(edit ? edit.value : '');

    // <><><><><>< ------ =====> After form submited

    const handleSubmit = (e) =>{
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: value
        })
        setValue('');
    }

    // ++++++===> Change input value take value <========+++++

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            {edit ? 
                <div className='add-edit'>
                    <input type='text' onChange={handleChange} value={value} placeholder='Edit Text'/>
                    <button>Update</button>
                </div>:
                <div className='add-todo'>
                    <input type='text' onChange={handleChange} value={value} placeholder='Add todo'/>
                    <button>Add todo</button>
                </div>
            }
        </form>
    )
}
export default TodoForm1;
