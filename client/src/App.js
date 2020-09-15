import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Home, Movies, Series, Form, Favorites, SeriesForm, Detail } from "./pages";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { favoriteItems } from "./cache";
import './App.css'

const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorites: {
            read() {
              return favoriteItems()
            }
          },
          Movies: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            {/* <Route path="/movies/:id">
              <Detail/>
            </Route> */}
            <Route path="/movies">
              <Movies/>
            </Route>
            <Route path="/series">
              <Series/>
            </Route>
            <Route path="/add">
              <Form/>
            </Route>
            <Route path="/add-series">
              <SeriesForm/>
            </Route>
            <Route path="/favorites">
              <Favorites/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
