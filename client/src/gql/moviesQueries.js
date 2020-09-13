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

// export const POST_MOVIE = gql`
//   mutation postMovie($name: String, $age: Int) {
//     postMovie(newUser: { name: $name, age: $age }) {
//       id
//       name
//       age
//     }
//   }
// `

