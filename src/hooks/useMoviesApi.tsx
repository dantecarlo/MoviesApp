import i18next from 'i18next'
import { useQuery } from 'react-query'

import {
  getCurrentMoviesAPI,
  getPopularMoviesAPI,
  getTopRatedMoviesAPI,
  getUpcomingMoviesAPI
} from '../services/movies/movie.api'
import { IMoviesAPI } from '../services/movies/movie.types'
import { QUERY_KEYS } from '../utils/constants'

const useMoviesApi = () => {
  const currentMovies = useQuery<IMoviesAPI>(QUERY_KEYS.GET_CURRENT, () =>
    getCurrentMoviesAPI(i18next.language)
  )

  const popularMovies = useQuery<IMoviesAPI>(QUERY_KEYS.GET_POPULAR, () =>
    getPopularMoviesAPI(i18next.language)
  )

  const topViewMovies = useQuery<IMoviesAPI>(QUERY_KEYS.GET_TOP_RATED, () =>
    getTopRatedMoviesAPI(i18next.language)
  )

  const upcomingMovies = useQuery<IMoviesAPI>(QUERY_KEYS.GET_UPCOMING, () =>
    getUpcomingMoviesAPI(i18next.language)
  )

  return {
    currentMovies,
    popularMovies,
    topViewMovies,
    upcomingMovies
  }
}

export default useMoviesApi
