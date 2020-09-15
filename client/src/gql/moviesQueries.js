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
  query ($_id: ID) {
    Movie (_id: $_id) {
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

export const PUT_MOVIE = gql`
  mutation putMovie($_id: ID, $title: String, $overview: String, $poster_path: String, $popularity: Float, $tags: [String]) {
    putMovie(_id: {_id: $_id}, newMovie: { title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags }) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const DEL_MOVIE = gql`
  mutation delMovie ($_id: ID) {
    delMovie(_id: $_id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`