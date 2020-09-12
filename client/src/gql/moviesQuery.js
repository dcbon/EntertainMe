import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    Movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_MOVIE = gql`
  query {
    Movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`
