import { useNavigation } from '@react-navigation/native'
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import { routes } from '../../utils/constants'
import { IHomeScreen } from './HomeScreen.types'

const HomeScreen = () => {
  const navigation = useNavigation<IHomeScreen>()
  const { t } = useTranslation('global')

  const handleLanguagePress = () => {
    i18next.changeLanguage(i18next.language === 'en' ? 'es' : 'en')
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title={t('Screen.HomeScreen.next')}
        onPress={() => navigation.navigate(routes.DETAILS_SCREEN)}
      />
      <Button
        title={t('Screen.HomeScreen.language')}
        onPress={handleLanguagePress}
      />
    </View>
  )
}

export default HomeScreen
