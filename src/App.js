import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AppDesign from './Pages/AppDesign/AppDesign';
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import GraphicDesign from './Pages/GraphicDesign/GraphicDesign';
import Home from './Pages/Home/Home';
import Locations from './Pages/Locations/Locations';
import WebDesign from './Pages/WebDesign/WebDesign';

function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
      <Switch>
          <Route exact path = "/">  <Home/> </Route>
          <Route exact path = "/web-design">  <WebDesign/> </Route>
          <Route exact path = "/graphic-design">  <GraphicDesign/> </Route>
          <Route exact path = "/app-design">  <AppDesign/> </Route>
          <Route exact path = "/our-company"> <Company/> </Route>
          <Route exact path = "/locations"> <Locations/> </Route>
          <Route exact path = "/contact-us"> <Contact/> </Route>
      </Switch>
     
    </div>
      <Footer/>
    </Router>
  );
}

export default App;
