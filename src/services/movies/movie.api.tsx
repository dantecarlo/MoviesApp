import axios from 'axios'
import { API_KEY_MOVIE } from 'react-native-dotenv'

import { MOVIE_URL } from '../../utils/constants'
import { ICurrentMoviesAPI } from './movie.types'

// eslint-disable-next-line import/prefer-default-export
export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY_MOVIE
  }
})

export const getCurrentMoviesAPI = async (language: string) => {
  const response = await movieApi.get<ICurrentMoviesAPI>(
    MOVIE_URL.GET_CURRENT,
    {
      params: { language }
    }
  )
  return response.data
}
