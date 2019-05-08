import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserStoreConsumer } from './store/userStore'

export class App extends Component {
  public render() {
    return (
      <UserStoreConsumer>
        {({ username }) => (
          <View style={styles.container}>
            <Text>Hi {username}, open up 'src/App.tsx' to start!</Text>
          </View>
        )}
      </UserStoreConsumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})
