import React, { PureComponent } from 'react';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

// import query from './graphql/queries/random-pics.gql';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: 'https://baconipsum.com/api' });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const query = gql `query getRandomPicture {
  randomPic @rest(type: "RandomPic", path: "/?type=meat-and-filler") 
}`;

client.query({ query: query }).then(response => {
  console.log(response);
});

class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}

export default App 