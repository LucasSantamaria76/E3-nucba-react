import { ContainerBtnRadio, InputSelectStyle, Label, ListContainer } from './listTasks.styles';
import { useSelector } from 'react-redux';
import CardTask from './CardTask';
import { useState } from 'react';

const ListTasks = () => {
  const [filter, setFilter] = useState('all');
  const { tasks } = useSelector((state) => state.tasksReducer);
  return (
    <>
      <Label>
        <p>Filtrar </p>
        <InputSelectStyle defaultValue={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value='all'>Todas</option>
          <option value='completed'>Completadas</option>
          <option value='incomplete'>Incompletas</option>
        </InputSelectStyle>
      </Label>
      {/*       <ContainerBtnRadio>
        <input
          type='radio'
          id='all'
          name='filtro'
          value='all'
          checked={filter === 'all'}
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor='all'>Todas</label>
        <input
          type='radio'
          id='completed'
          name='filtro'
          value='completed'
          onChange={(e) => setFilter(e.target.value)}
          checked={filter === 'completed'}
        />
        <label htmlFor='completed'>Completas</label>
        <input
          type='radio'
          id='incomplete'
          name='filtro'
          value='incomplete'
          checked={filter === 'incomplete'}
          onChange={(e) => setFilter(e.target.value)}
        />
        <label htmlFor='incomplete'>Incompletas</label>
      </ContainerBtnRadio> */}

      <ListContainer>
        {filter === 'all' && tasks?.map((task) => <CardTask key={task.id} {...task} />)}
        {filter === 'completed' &&
          tasks?.map((task) => task.completed && <CardTask key={task.id} {...task} />)}
        {filter === 'incomplete' &&
          tasks?.map((task) => !task.completed && <CardTask key={task.id} {...task} />)}
      </ListContainer>
    </>
  );
};

export default ListTasks;
