import './App.css';
// import DynamicTableCreate from './Components/DynamicTableCreate';
// import Task03A from './Components/Session 03/10/2025/Task03A';
// import Task03B from './Components/Session 03/10/2025/Task03B';
// import Task03C from './Components/Session 03/10/2025/Task03C';
// import CurrentTime from './Components/Session 03/10/2025/CurrentTime';
// import Parent from './Components/Session 03/10/Parent';
// import Light_Dark_Theme from './Components/Session 03/10/Light_Dark Theme/Light_Dark_Theme';
// import UserAdd from './Components/Users/UserAdd';
// import Appfolder from './Components/Comments/createfolder';
import UserList from './Components/Users/UserList';
import { ThemeProvider } from './Components/Context/ThemeContext'; // Correct import
// import Themes from './Components/Users/Themes'; // Correct import
import { useContext } from 'react';
import { ThemeContext } from './Components/Context/allContexts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewUserDetail from './Components/Users/ViewUserDetails';
import { UserInfoProvider } from './Components/Context/UserInfoContect';
import { DataProvider } from './Components/Context/DataContext';
import Header from './Components/NavBar';
// import AddUserForm from './Components/Users/AddUserForm';

const AppContent = () => {
const { theme } = useContext(ThemeContext); 

  return (
    <div className={`${theme}_theme`} style={{height:'100%'}}>
      <Header/>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/adduser' element={<UserList />}/>
        <Route path='/UserPost' element={<ViewUserDetail />} />
        <Route path='/user/delete' element={<UserList />}/>
        {/* <DynamicTableCreate /> */}
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <UserInfoProvider>
          <Router>
            <AppContent />
          </Router>
        </UserInfoProvider>
      </DataProvider>
    </ThemeProvider>
  );
}


export default App;



// return (
//   <>
//     <ThemeProvider>
//       <div className={`${theme}_theme`}>
//         {/* <UserAdd /> */}
//         <Themes />
//         <UserList />
//         {/* <DynamicTableCreate /> */}

//         {/* <Task03A />
//           <Task03B />
//           <Task03C />
//           <CurrentTime/>
//           <Parent/>
//           <Light_Dark_Theme/> */}

//         {/* <Appfolder /> */}
//       </div>
//     </ThemeProvider>
//   </>
// );