import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Count from './components/Count';
import { getUser } from './redux/ducks/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  },[])

  const user = useSelector(state => state.user.user);
  console.log(user)
  const count = useSelector(state => state.counter.count);
  return (
    <div className="App">
      <h1>Redux Saga</h1>
      {user && (
        <div style={{ backgroundColor: 'lightcoral', padding: '10px'}}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <h3>Count: {count}</h3>
      <Count />
    </div>
  );
}

export default App;