import { gql } from '@apollo/client';

export const GET_GAMES = gql`
  query GetGames {
    games {
      id
      name
      description
      iconUrl
      playDuration
    }
  }
`;

export const GET_GAME = gql`
  query GetGame($id: String!) {
    game(id: $id) {
      id
      gameId
      name
      description
      iconUrl
      coverUrl
      playDuration
      status
      intensity
      paywall
      relatedSkill {
        name
        description
      }
    }
  }
`; 