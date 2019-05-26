import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { config } from '../../utils'
import { LOCAL_STATE_QUERY } from '../../components/Cart'

const { endpointDev, endpointProd } = config

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpointDev : endpointProd,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      })
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, client) {
            const { cache } = client
            // read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            })
            // Write the cart State to the opposite
            const data = {
              data: { cartOpen: !cartOpen },
            }
            cache.writeData(data)
            return data
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  })
}

export default withApollo(createClient)
