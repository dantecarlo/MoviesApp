import { StyleSheet } from 'react-native'

import theme from '../../theme/theme'

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: theme.spacing.l
  },
  carouselContainer: {
    height: 440
  },
  sliderContainer: {
    paddingHorizontal: theme.spacing.m
  }
})

export default styles
