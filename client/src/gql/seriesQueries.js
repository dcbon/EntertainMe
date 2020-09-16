import { gql } from "@apollo/client";

export const GET_SERIES = gql`
  query {
    tvSeries {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_ONE_SERIES = gql`
  query {
    tvSeriesOne {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const POST_SERIES = gql`
  mutation postSeries($title: String, $overview: String, $poster_path: String, $popularity: Float, $tags: [String]) {
    postSeries(newSeries: { title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags }) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const PUT_SERIES = gql`
  mutation putSeries($_id: ID, $title: String, $overview: String, $poster_path: String, $popularity: Float, $tags: [String]) {
    putSeries(_id: {_id: $_id}, newSeries: { title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, tags: $tags }) {
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const DEL_SERIES = gql`
  mutation delSeries ($_id: ID) {
    delSeries(_id: $_id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`
