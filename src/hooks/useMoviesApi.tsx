import i18next from 'i18next'
import { useQuery } from 'react-query'

import { getCurrentMoviesAPI } from '../services/movies/movie.api'
import { ICurrentMoviesAPI } from '../services/movies/movie.types'
import { QUERY_KEYS } from '../utils/constants'

const useMoviesApi = () => {
  const currentMovies = useQuery<ICurrentMoviesAPI>(
    QUERY_KEYS.GET_CURRENT,
    () => getCurrentMoviesAPI(i18next.language)
  )

  return {
    currentMovies
  }
}

export default useMoviesApi
