import React, { createContext } from 'react'

interface IUserProviderState {
  username: string
  updateUsername: any
}

interface IUserStore {
  username: string
  updateUsername: () => void
}

const UserStore: IUserStore = {
  username: 'Default Name',
  updateUsername: () => {
    //
  }
}

export class UserProvider extends React.Component<{}, IUserProviderState> {
  private updateUsername = (newUsername: any) => {
    this.setState({ username: newUsername })
  }

  public state: IUserProviderState = {
    username: 'user',
    updateUsername: this.updateUsername
  }

  public render() {
    return (
      <UserStoreContext.Provider value={this.state}>
        {this.props.children}
      </UserStoreContext.Provider>
    )
  }
}

export const UserStoreContext = createContext(UserStore)
export const UserStoreConsumer = UserStoreContext.Consumer
