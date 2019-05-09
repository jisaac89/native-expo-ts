import React, { createContext } from 'react'

const menuStore = {
  isMenuOpen: false,
  toggleMenu: () => {}
}

export interface IMenuProviderState {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export class MenuProvider extends React.Component<{}, IMenuProviderState> {
  public toggleMenu = () => {
    this.setState((state: IMenuProviderState) => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  public state = {
    isMenuOpen: false,
    toggleMenu: this.toggleMenu
  }

  public render() {
    // tslint:disable-next-line: no-this-assignment
    const { children } = this.props
    return (
      <MenuStoreContext.Provider value={this.state}>
        {children}
      </MenuStoreContext.Provider>
    )
  }
}

// tslint:disable-next-line: no-object-literal-type-assertion
export const MenuStoreContext = createContext(menuStore)
export const MenuStoreConsumer = MenuStoreContext.Consumer
