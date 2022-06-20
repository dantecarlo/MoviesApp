import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import i18next from 'i18next'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'

import en from './src/i18n/en.json'
import es from './src/i18n/es.json'
import MainStack from './src/navigation/MainStack/MainStack'
import { INITIAL_LANGUAGE } from './src/utils/constants'

i18next.init({
  compatibilityJSON: 'v3',
  fallbackLng: ['en', 'es'],
  interpolation: {
    escapeValue: false
  },
  lng: INITIAL_LANGUAGE,
  resources: {
    'en-US': { global: en },
    'es-ES': { global: es }
  }
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000
    }
  }
})

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </QueryClientProvider>
    </I18nextProvider>
  )
}

export default App
