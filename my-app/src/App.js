import logo from './logo.svg';
import './App.css';
// import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
// import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
// import Greetings from './components/Greetings';
// import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}    
      {/* <Greetings name="Javascript">Language of the Web</Greetings>
      <Greetings name="Python" />
      <Greetings name="Swift">Language of iOS app</Greetings>
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
      <Welcome name="React Native" />
      <Welcome name="Java"><button>Click for Java</button></Welcome> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
