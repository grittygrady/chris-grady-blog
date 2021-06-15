import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Posts from './components/Posts';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/posts/:slug' />
        <Route component={Posts} path='/posts' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
