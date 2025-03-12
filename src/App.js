// import logo from './logo.svg';
import './App.css'
import DynamicTableCreate from './Components/DynamicTableCreate';
import Task03A from './Components/Session 03/10/2025/Task03A';
import Task03B from './Components/Session 03/10/2025/Task03B';
import Task03C from './Components/Session 03/10/2025/Task03C';
import CurrentTime from './Components/Session 03/10/2025/CurrentTime';
import UserList from './Components/Users/UserList';
import Parent from './Components/Session 03/10/Parent';
import Light_Dark_Theme from './Components/Session 03/10/Light_Dark Theme/Light_Dark_Theme';
import UserAdd from './Components/Users/UserAdd';

function App() {
  return (
    <div className="App">
      {/* <UserAdd/> */}
      <UserList />
      {/* <DynamicTableCreate/> */}

      {/* <Task03A />
      <Task03B />
      <Task03C />
      <CurrentTime/>
      <Parent/>
      <Light_Dark_Theme/> */}

    </div>
  );
}

export default App;