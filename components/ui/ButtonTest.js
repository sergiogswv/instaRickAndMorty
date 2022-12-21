import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export const ButtonTest = () => {
  return (
    <View>
      <Button title='' styles={styles.history}>
        test
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  history: {
    borderRadius: 10,
    width: 5,
    height: 5,
    backgroundColor: '#fff'
  }
})
