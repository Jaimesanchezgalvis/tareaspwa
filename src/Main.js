import { React, useReducer, useEffect } from 'react';
import Swal from 'sweetalert2';

import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { reducer } from './reducer';
import './styles.css';

// estado inicial de la aplicacion 
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const Main = () => {

    // este es el hook reducer 
    const [todos, dispatch] = useReducer(reducer, [], init);

    // hook para que se almacene en el local storage solo cuando cambien los todos 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action)

        Swal.fire({
            icon: 'error',
            timer: 800,
            width: 200,
            title: 'delete'
        });
    }

    const handleToggle = (todoId,todoDone ) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });
        
        if (todoDone === !true) {
            Swal.fire({
                timer: 800,
                width: 200,
                title: 'complete'
            });
        }else{
            Swal.fire({
                timer: 800,
                width: 300,
                title: 'incomplete',

            
            });
        }



    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });


    }

    return (
        <div className="container">
            <h2 className='text-center animate__animated animate__fadeInRight'>Listado de tareas</h2>
            <hr />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle} />
            <AddTodo
                handleAddTodo={handleAddTodo} />
        </div>
    )
};