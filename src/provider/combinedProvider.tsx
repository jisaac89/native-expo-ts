import React from 'react'
import { AppProvider } from '../store/appStore'
import { MenuProvider } from '../store/menuStore'

interface ICombinedContextProvider {
  children: JSX.Element
}

export const CombinedContextProvider = ({
  children
}: ICombinedContextProvider) => (
  <AppProvider>
    <MenuProvider>{children}</MenuProvider>
  </AppProvider>
)
