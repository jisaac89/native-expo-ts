import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up 'src/App.tsx' to start!</Text>
      </View>
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
