import { NavLink } from 'react-router-dom';
import { NavContainer, PokeballIcon } from './navbar.styles.js';
import { BiTask, BiTaskX } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { tasks } = useSelector((state) => state.tasksReducer);
  const hasTasks = tasks.length > 0;

  return (
    <NavContainer hasTasks={hasTasks}>
      <NavLink to='/' end>
        <h4>React ( ej.º 3)</h4>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/' end>
            Home
          </NavLink>
        </li>
        <li>
          {hasTasks ? <BiTask className='tasksIcon' /> : <BiTaskX className='tasksIcon' />}
          <span>{tasks.length}</span>
          <NavLink to='/todo' end>
            Lista de Tareas
          </NavLink>
        </li>
        <li>
          <PokeballIcon src={'/assets/Pokeball-PNG-Image-File.png'} alt='pokeball' />
          <NavLink to='/pokeapi' end>
            PokeApi
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Navbar;
