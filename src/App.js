import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import EditData from './Components/EditData';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/editData/:id' element={<EditData/>}/>
      </Routes>
    </Router>
  );
}

export default App;
