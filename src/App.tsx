import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
  // GestureResponderEvent
} from 'react-native'
import { AppProvider } from './store/appStore'
import { MenuProvider } from './store/menuStore'
import { CombinedConsumer } from './consumer/combinedConsumer'

export class App extends Component {
  public render() {
    return (
      <AppProvider>
        <MenuProvider>
          <CombinedConsumer
            render={({
              isNightMode,
              toggleNightmode,
              isMenuOpen,
              toggleMenu
            }) => (
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
          />
        </MenuProvider>
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
