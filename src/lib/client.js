import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(`https://api.spacex.land/graphql/`, {
  headers: {},
})
