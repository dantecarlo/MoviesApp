import axios from 'axios'
import { API_KEY_MOVIE } from 'react-native-dotenv'

import { MOVIE_URL } from '../../utils/constants'
import { IMoviesAPI } from './movie.types'

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY_MOVIE
  }
})

export const getCurrentMoviesAPI = async (language: string) => {
  const response = await movieApi.get<IMoviesAPI>(MOVIE_URL.GET_CURRENT, {
    params: { language }
  })
  return response.data
}

export const getPopularMoviesAPI = async (language: string) => {
  const response = await movieApi.get<IMoviesAPI>(MOVIE_URL.GET_POPULAR, {
    params: { language }
  })
  return response.data
}

export const getTopRatedMoviesAPI = async (language: string) => {
  const response = await movieApi.get<IMoviesAPI>(MOVIE_URL.GET_TOP_RATED, {
    params: { language }
  })
  return response.data
}

export const getUpcomingMoviesAPI = async (language: string) => {
  const response = await movieApi.get<IMoviesAPI>(MOVIE_URL.GET_UPCOMING, {
    params: { language }
  })
  return response.data
}
