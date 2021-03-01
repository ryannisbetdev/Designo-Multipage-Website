import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Home/>
    </div>
    </Router>
  );
}

export default App;
