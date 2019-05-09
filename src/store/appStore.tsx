import React, { createContext } from 'react'

const appStore = {
  isNightMode: false,
  toggleNightmode: () => {}
}

export interface IAppProviderState {
  isNightMode: boolean
  toggleNightmode: () => void
}

export class AppProvider extends React.Component<{}, IAppProviderState> {
  public toggleNightmode = () => {
    this.setState((state: IAppProviderState) => ({
      isNightMode: !state.isNightMode
    }))
  }

  public state = {
    isNightMode: true,
    toggleNightmode: this.toggleNightmode
  }

  public render() {
    // tslint:disable-next-line: no-this-assignment
    const { children } = this.props
    return (
      <AppStoreContext.Provider value={this.state}>
        {children}
      </AppStoreContext.Provider>
    )
  }
}

// tslint:disable-next-line: no-object-literal-type-assertion
export const AppStoreContext = createContext(appStore)
export const AppStoreConsumer = AppStoreContext.Consumer
