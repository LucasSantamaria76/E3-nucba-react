import { Card } from './cardTask.styles';
import { Button } from './../common/Button';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteTask, setEditTask, toggleTaskConpleted } from '../../redux/tasks/actions';
import Swal from 'sweetalert2';

const CardTask = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Swal.fire({
      title: '¿ Seguro que desea eliminar la tarea ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--danger-color)',
      cancelButtonColor: 'var(--primary-color)',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
    }).then(({ isConfirmed }) => {
      isConfirmed && dispatch(deleteTask(id));
    });
  };

  return (
    <Card completed={completed}>
      <div>
        <input
          type='checkbox'
          checked={completed}
          onClick={() => dispatch(toggleTaskConpleted(id))}
        />
        <p>{title}</p>
      </div>
      <Button
        w='40px'
        bg='--warning-color'
        onClick={() => dispatch(setEditTask(id))}
        disabled={completed}>
        <BsPencil />
      </Button>
      <Button w='40px' bg='--danger-color' onClick={(id) => handleDelete(id)}>
        <BsTrash />
      </Button>
    </Card>
  );
};

export default CardTask;
