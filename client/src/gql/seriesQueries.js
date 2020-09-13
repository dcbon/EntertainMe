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
