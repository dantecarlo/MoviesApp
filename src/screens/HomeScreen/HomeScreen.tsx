import { useNavigation } from '@react-navigation/native'
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import MovieCard from '../../components/HomeScreen/MovieCard'
import MovieSlider from '../../components/HomeScreen/MovieSlider'
import useMoviesApi from '../../hooks/useMoviesApi'
import { IMovie } from '../../services/movies/movie.types'
import { routes } from '../../utils/constants'
import styles from './HomeScreen.styles'
import { IHomeScreen } from './HomeScreen.types'

const renderCarouselItem = ({ item }: { item: IMovie }) => (
  <MovieCard movie={item} />
)

const HomeScreen = () => {
  const navigation = useNavigation<IHomeScreen>()
  const { t } = useTranslation('global')
  const { currentMovies, popularMovies, topViewMovies, upcomingMovies } =
    useMoviesApi()
  const { width } = useWindowDimensions()

  const handleLanguagePress = () => {
    i18next.changeLanguage(i18next.language === 'en-US' ? 'es-ES' : 'en-US')
  }

  const { data: currentMoviesData } = currentMovies
  const { data: popularMoviesData } = popularMovies
  const { data: topViewMoviesData } = topViewMovies
  const { data: upcomingMoviesData } = upcomingMovies

  console.log('popularMoviesData', popularMoviesData)
  console.log('currentMoviesData', currentMoviesData)
  console.log('topViewMoviesData', topViewMoviesData)
  console.log('upcomingMoviesData', upcomingMoviesData)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <Carousel
            data={popularMoviesData?.results || []}
            renderItem={renderCarouselItem}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <View style={styles.sliderContainer}>
          <MovieSlider
            movies={currentMoviesData?.results || []}
            title={t('Screen.HomeScreen.inMovie')}
          />
        </View>

        <View style={styles.sliderContainer}>
          <MovieSlider
            movies={topViewMoviesData?.results || []}
            title={t('Screen.HomeScreen.topRated')}
          />
        </View>

        <View style={styles.sliderContainer}>
          <MovieSlider
            movies={upcomingMoviesData?.results || []}
            title={t('Screen.HomeScreen.upcoming')}
          />
        </View>

        <Button
          title={t('Screen.HomeScreen.next')}
          onPress={() => navigation.navigate(routes.DETAILS_SCREEN)}
        />
        <Button
          title={t('Screen.HomeScreen.language')}
          onPress={handleLanguagePress}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
