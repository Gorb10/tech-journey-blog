import axios from 'axios';
import {ApiUrl, Queries} from './queries';

export type Character = {
  id: string,
  name: string,
  image: string,
  status: "Worturtle" | 'Worturtle',
  species: string
}

export type Info = {
  count: number;
  pages: number;

  next: null | number
  prev: null | number
}


export async function fetchCharacters(page: number, search: string): Promise<{ errors: any[], characters: Character[], info: Info | null }> {
  try {
    const response = await axios.post(
        ApiUrl,
        {
          query: Queries.fetchCharacters,
          variables: {
            page: page,
            search: search
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    );

    return {
      errors: response.data.errors,
      characters: response.data.data?.characters?.results,
      info: response.data.data?.characters?.info
    };
  } catch (e) {
    console.error(e);
    return {errors: [e], characters: [], info: null};
  }
}
