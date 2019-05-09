import React, { Component } from 'react'
import { AppStoreConsumer, IAppProviderState } from '../store/appStore'
import { MenuStoreConsumer, IMenuProviderState } from '../store/menuStore'

export class CombinedConsumer extends Component<{
  render(renderProps: IAppProviderState & IMenuProviderState): JSX.Element
}> {
  public render() {
    return (
      <AppStoreConsumer>
        {appState => (
          <MenuStoreConsumer>
            {menuState => this.props.render({ ...appState, ...menuState })}
          </MenuStoreConsumer>
        )}
      </AppStoreConsumer>
    )
  }
}
