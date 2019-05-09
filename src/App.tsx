import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
  // GestureResponderEvent
} from 'react-native'
import { CombinedConsumer } from './consumer/combinedConsumer'
import { CombinedContextProvider } from './provider/combinedProvider'

export class App extends Component {
  public render() {
    return (
      <CombinedContextProvider>
        <CombinedConsumer>
          {({ isNightMode, toggleNightmode, isMenuOpen, toggleMenu }) => (
            <View style={styles.container}>
              <Text onPress={toggleNightmode}>
                Nightmode: {isNightMode ? 'true' : 'false'}
              </Text>
              <Text onPress={toggleNightmode}>
                Menu: {isMenuOpen ? 'true' : 'false'}
              </Text>
              <Button title="Toggle Nighmode" onPress={toggleNightmode} />
              <Button title="Toggle Menu" onPress={toggleMenu} />
            </View>
          )}
        </CombinedConsumer>
      </CombinedContextProvider>
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
