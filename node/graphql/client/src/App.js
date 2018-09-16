import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

//
import BookList from './components/BookList';
import AddBook from './components/AddBook'

//
const client = new ApolloClient({
  uri: 'http://localhost:3322/graphql'
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>GraphQl Study!</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
