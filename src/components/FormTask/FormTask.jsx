import { useEffect, useRef, useState } from 'react';
import './formTask.styles.js';
import Swal from 'sweetalert2';
import { Form } from './formTask.styles.js';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './../common/Button';
import { addTask, deleteAllTasks, saveEditTask } from '../../redux/tasks/actions.js';

const FormTask = () => {
  const { editTask } = useSelector((state) => state.tasksReducer);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(editTask.title);
    inputRef.current.focus();
  }, [editTask.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length) {
      !!editTask.id ? dispatch(saveEditTask(editTask.id, title)) : dispatch(addTask(title));
      setTitle('');
      inputRef.current.focus();
    } else setError(true);
  };

  const handleDeleteAll = () => {
    Swal.fire({
      title: '¿ Seguro que desea eliminar todas la tareas ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--danger-color)',
      cancelButtonColor: 'var(--primary-color)',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then(({ isConfirmed }) => isConfirmed && dispatch(deleteAllTasks()));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>{editTask?.id ? 'Editar Tarea' : 'Nueva tarea'}</h1>
        <input
          type='text'
          className={`${error ? 'inputError' : ''}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setError(false)}
          ref={inputRef}
          autoFocus
        />
        {error && <p className='error'>La tarea no puede estar vacía</p>}
        <div className='btn-container'>
          <Button type='submit'>{editTask?.id ? 'Editar Tarea' : 'Agregar tarea'}</Button>
          <Button type='button' onClick={handleDeleteAll} bg='--danger-color'>
            Eliminar lista de tareas
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormTask;
