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
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/teacher">
             <Header></Header>
            <Teachers></Teachers>
            <Footer></Footer>
          </Route>
          <Route path="*">
             <NoPage></NoPage>
          </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
