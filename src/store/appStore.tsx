import React, { createContext } from 'react'

const appStore = {
  nightmode: false,
  toggleNightmode: () => {}
}

interface IAppProviderState {
  nightmode: boolean
  toggleNightmode: () => void
}

export class AppProvider extends React.Component<{}, IAppProviderState> {
  public toggleNightmode = () => {
    this.setState((state: IAppProviderState) => ({
      nightmode: !state.nightmode
    }))
  }

  public state = {
    nightmode: true,
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
