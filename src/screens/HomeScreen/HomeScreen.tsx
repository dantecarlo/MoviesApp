import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

import { routes } from '../../utils/constants'
import { IHomeScreen } from './HomeScreen.types'

const HomeScreen = () => {
  const navigation = useNavigation<IHomeScreen>()

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate(routes.DETAILS_SCREEN)}
      />
    </View>
  )
}

export default HomeScreen
