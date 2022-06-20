// Routes
export const routes = {
  HOME_SCREEN: 'HOME_SCREEN',
  DETAILS_SCREEN: 'DETAILS_SCREEN'
} as const

// Language
export const INITIAL_LANGUAGE = 'en-US'

// Movie API
export const MOVIE_URL = {
  GET_CURRENT: '/now_playing',
  GET_POPULAR: '/popular',
  GET_TOP_RATED: '/top_rated',
  GET_UPCOMING: '/upcoming'
}

export const QUERY_KEYS = {
  GET_CURRENT: 'GET_CURRENT',
  GET_POPULAR: 'GET_POPULAR',
  GET_TOP_RATED: 'GET_TOP_RATED',
  GET_UPCOMING: 'GET_UPCOMING'
}
