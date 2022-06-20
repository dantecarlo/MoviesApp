import { StyleSheet } from 'react-native'

import theme from '../../../theme/index'

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'red',
    width: '100%',
    height: '95%',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: theme.shapes.borderRadius
  },
  image: {
    flex: 1,
    borderRadius: theme.shapes.borderRadius
  },
  flatListContainer: {
    paddingHorizontal: theme.spacing.m
  }
})

export default styles
