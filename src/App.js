import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import Services from './components/Services/Services';
import Teachers from './components/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>  
          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/teacher">
             <Teachers></Teachers>
          </Route>
          <Route path="*">
             <NoPage></NoPage>
          </Route>
       </Switch>
       <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
