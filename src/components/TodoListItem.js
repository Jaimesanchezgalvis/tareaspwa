import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {


    return (
        <ul className='list-group animate__animated animate__fadeInUpBig'>
            <li
                key={todo.i}
                className="list-group-item justify-content-between"
            >
                <div className="row justify-content-between">
                    <div className="col align-self-center">
                        <p
                            className={`${todo.done && 'complete'}`}
                            onClick={() => handleToggle(todo.id, todo.done)}
                        >{index + 1}. {todo.desc}</p>
                    </div>
                    <div className="col-3 align-self-center">
                        <button
                            className='btn btn-danger mt-1'
                            onClick={() => handleDelete(todo.id)}
                        >
                            <FontAwesomeIcon fontSize={20} icon={faTrash} /></button>
                    </div>
                </div>
            </li>
        </ul>
    )
}


