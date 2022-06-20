import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { IMovie } from '../../../services/movies/movie.types'
import MovieCard from '../MovieCard/index'
import styles from './MovieSlider.styles'
import { IMovieSlider } from './MovieSlider.types'

const renderItem = ({ item }: { item: IMovie }) => (
  <View style={styles.MovieCardContainer}>
    <MovieCard movie={item} />
  </View>
)

const itemKey = (item: IMovie, index: number) => `movies-${index}-${item.id}`

const MovieSlider: FC<IMovieSlider> = ({
  movies = [],
  title: sectionTitle = ''
}) => (
  <View>
    <Text style={styles.sliderText}>{sectionTitle}</Text>
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={itemKey}
      horizontal
      showsVerticalScrollIndicator={false}
    />
  </View>
)

export default MovieSlider
