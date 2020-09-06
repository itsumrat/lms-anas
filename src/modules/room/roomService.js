import gql from 'graphql-tag';
import graphqlClientConfig from 'modules/shared/graphql/graphqlClient';
import axios from 'axios';
import { getStore } from 'modules/store';
import config from 'config';

export default class LiveService {
  static async getUsername(id) {
    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
          query MyQuery {
            getname(where: { user_id: { _eq: "${id}" } }) {
              register_data
              role
            }
          }
        `,
      });

    let responsejson = response.data.getname[0];

    return responsejson;
  }

  static async getRoom() {
    const date = new Date();
    const Day = date.getDay();

    const response = await graphqlClientConfig
      .config()
      .query({
        query: gql`
        query MyQuery {
          roomSession(where: {jours: {_eq: ${Day}}, heure_debut: {_lte: "now()"}, heure_fin: {_gte: "now')"}}) {
            id
            RoomName
            heure_debut
            heure_fin
            id_niveau
            jours
          }
        }
        
        `,
      });

    let responsejson = response.data.roomSession[0];

    return responsejson;
  }
}
