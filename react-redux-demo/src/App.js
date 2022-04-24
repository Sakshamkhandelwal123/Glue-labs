import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import EggContainer from './components/EggContainer';
import HookEggContainer from './components/HookEggContainer';
import HookChickenContainer from './components/HookChickenContainer';
import NewEggContainer from './components/NewEggContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
        <HookChickenContainer />
        <NewEggContainer />
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;