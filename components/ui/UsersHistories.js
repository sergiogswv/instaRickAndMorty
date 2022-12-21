import React from 'react'
import { View, Text, Pressable, StyleSheet, SafeAreaView, Image } from 'react-native'

const users = [
  {id: 1, user: 'uno'},
  {id: 2, user: 'dos'},
  {id: 3, user: 'tres'},
  {id: 4, user: 'cuatro'},
  {id: 5, user: 'cinco'},
  {id: 6, user: 'seis'},
]

export const UsersHistories = ({navigation, route}) => {
  return (
    <View style={styles.navbar}>
      <Image 
        source={require('../images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.histories}>
        {users.map( user => (
          <Pressable style={styles.boton} key={user.id}>
            <Text style={styles.testText}></Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const circle = 60
const styles = StyleSheet.create({
  navbar: {
    flex: 0.3, 
    flexDirection: 'column',
    top: 20,
    alignItems: 'stretch'
  },
  histories: {
    flexDirection: 'row',
    top: 20,
  },
  logo: {
    width: 175,
    height: 50,
    left: 10,
    top: 20
  },
  boton: {
    width: circle,
    height: circle,
    borderRadius: circle / 2,
    backgroundColor: '#f00',
    margin: 5
  },
  testText: {
    backgroundColor: '#fff',
    borderRadius: circle / 2,
    width: circle - 5,
    height: circle - 5,
    margin: 2.5
  }
})
