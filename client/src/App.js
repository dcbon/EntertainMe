import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home, Movies, Series } from "./pages";
import Navbar from './components/Navbar'
import './App.css'

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/series">
            <Series/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
