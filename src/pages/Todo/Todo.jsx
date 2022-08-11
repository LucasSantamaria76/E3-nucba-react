import FormTask from '../../components/FormTask/FormTask';
import ListTasks from '../../components/ListTasks/ListTasks';
import { TodoContainer } from './todo.styles';

const Todo = () => {
  return (
    <TodoContainer>
      <FormTask />
      <ListTasks />
    </TodoContainer>
  );
};

export default Todo;
