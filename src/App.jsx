import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Todo from './pages/Todo/Todo';
import PokeApi from './pages/PokeApi/PokeApi';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/pokeapi' element={<PokeApi />} />
      </Routes>
    </>
  );
};

export default App;
