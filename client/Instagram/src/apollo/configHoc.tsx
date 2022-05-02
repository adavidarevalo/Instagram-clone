import { ReactChildren, ReactChild } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { TOKEN } from './../utils/token'
import { createUploadLink } from 'apollo-upload-client'

interface IProps {
  children: ReactChild | ReactChildren;
}

export default function ApolloConfigHoc ({ children }: IProps) {
  const httpLink = createUploadLink({
    uri: 'http://localhost:4000/graphql'
  })
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(TOKEN)
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  })
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
