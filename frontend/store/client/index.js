import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

import { config } from '../../utils'

const { endpointDev, endpointProd } = config

const createClient = ({ headers }) => {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpointDev : endpointProd,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    }
  })
}

export const withData = withApollo(createClient)