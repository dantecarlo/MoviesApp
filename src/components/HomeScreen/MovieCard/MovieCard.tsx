import React, { FC } from 'react'
import { Image, View } from 'react-native'

import styles from './MovieCard.styles'
import { IMovieCard } from './MovieCard.types'

const MovieCard: FC<IMovieCard> = ({ movie }) => {
  const { poster_path: posterPath } = movie

  const uri = `https://image.tmdb.org/t/p/original/${posterPath}`

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  )
}

export default MovieCard
