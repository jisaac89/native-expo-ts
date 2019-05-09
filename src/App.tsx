import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  Button
} from 'react-native'
import { AppStoreConsumer, AppProvider } from './store/appStore'

export class App extends Component {
  public render() {
    return (
      <AppProvider>
        <AppStoreConsumer>
          {({ nightmode, toggleNightmode }) => (
            <View style={styles.container}>
              <Text onPress={toggleNightmode}>
                Hi {nightmode ? 'true' : 'false'}, open up 'src/App.tsx' to
                start!
              </Text>
              <Button title="Press this" onPress={toggleNightmode} />
            </View>
          )}
        </AppStoreConsumer>
      </AppProvider>
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
