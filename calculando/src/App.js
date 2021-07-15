import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/index';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <Home />
      <Route path="/team" component={Team} />
    </Router>
  );
}

export default App;
