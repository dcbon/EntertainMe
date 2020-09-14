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

export const POST_MOVIE = gql`
  mutation postMovie($title: String, $overview: String, $poster_path: String, $popularity: Float, $tags: [String]) {
    postMovie(newMovie: { title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags }) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

// export const PUT_MOVIE = gql`

// `

// export const DEL_MOVIE = gql`

// `