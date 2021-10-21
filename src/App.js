import './App.css';
import Counter from './component/counter/counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/home/Home';
import Shop from './component/shop/Shop';
import Details from './component/details/Details'
import TodoList from "./views/todo/Todo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Counter} path="/counter" />
          <Route component={Shop} path="/shop" />
          <Route component={Details} path="/details/:id" />
          <Route component={TodoList} path="/todo" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
