import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
