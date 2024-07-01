import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import MovieDetail from './pages/MovieDetail';
import SeriesDetail from './pages/SeriesDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/series" exact component={Series} />
          <Route path="/series/:id" component={SeriesDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
