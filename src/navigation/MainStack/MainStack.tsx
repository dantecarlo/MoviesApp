import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import DetailsScreen from '../../screens/DetailsScreen/index'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import { routes } from '../../utils/constants'
import { IMainStack } from './MainStack.types'

const Stack = createStackNavigator<IMainStack>()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.DETAILS_SCREEN} component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
