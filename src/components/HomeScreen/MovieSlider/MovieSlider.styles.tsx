import { StyleSheet } from 'react-native'

import theme from '../../../theme/index'

const styles = StyleSheet.create({
  sliderText: {
    fontSize: theme.typography.fontSize.h6,
    fontWeight: 'bold',
    color: theme.colors.black,
    marginBottom: theme.spacing.s
  },
  MovieCardContainer: {
    height: 260,
    width: 140,
    marginHorizontal: theme.spacing.m
  }
})

export default styles
