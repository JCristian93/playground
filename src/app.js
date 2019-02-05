import React, { PureComponent } from 'react';
import Routes from './routes';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';


const client = new ApolloClient({
  uri: 'https://picsum.photos/200/300',
})

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