import { gql } from "@apollo/client";

export const GET_FAVORITES = gql`
  query getFavorites {
    favorites @client
  }
`