import React from 'react'
import { AppStoreConsumer, IAppProviderState } from '../store/appStore'
import { MenuStoreConsumer, IMenuProviderState } from '../store/menuStore'

interface ICombinedConsumerProps {
  children: (renderProps: IAppProviderState & IMenuProviderState) => JSX.Element
}
export const CombinedConsumer = ({ children }: ICombinedConsumerProps) => {
  return (
    <AppStoreConsumer>
      {appState => (
        <MenuStoreConsumer>
          {menuState => children({ ...appState, ...menuState })}
        </MenuStoreConsumer>
      )}
    </AppStoreConsumer>
  )
}
