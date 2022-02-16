import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import '../styles.css';



export const AddTodo = ({ handleAddTodo }) => {


    // este es un custom hook para traer valores de formualarios 
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim() <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        Swal.fire({
            icon: 'success',
            timer: 800,
            width: 200,
            title: 'saved'
        });

        handleAddTodo(newTodo)
        reset();
    }
   
    return (
        <div className='m-1 animate__animated animate__fadeInLeft'>
            <form
                onSubmit={handleSubmit}
            >
                <input type="text"
                    name='description'
                    value={description}
                    placeholder='Tu proxima tarea...'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                />
                <button
                    className='btn btn-outline-primary col-12 mt-3 mb-3'
                    type='submit'
                >
                    Agregar
                </button>
            </form>
        </div>
    )
};