import { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { UsersHistories } from './components/ui/UsersHistories';

export default function Home({navigation}) {
  const [text, onChangeText] = useState('')

  const handleTask = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/2')
    const tasks = await response.json()
    Alert.alert(tasks.name)
    console.log(tasks.name)

  }

  return (
    <SafeAreaView style={styles.container}>
      <UsersHistories />
      <View style={styles.viewtest} >
        <Text>Login</Text>
        <View style={styles.box}>
          <TextInput 
            style={styles.input}
              onChangeText={onChangeText}
            value={text}
          />
          <Button 
            onPress={() => handleTask()}
            title='Login me! :)'
            color= '#ff0022'
            accessibilityLabel='Please press me'
          />
        </View>
        <Button 
          onPress={() => navigation.navigate('Profile', {name: 'Sergio'})}
          title='Profile! :)'
          color= '#ff0022'
          accessibilityLabel='Please press me'
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewtest: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  box: {
    backgroundColor: '#f2f2f2',
    height: 100,
    borderColor: '#CB431B',
    borderStartWidth: 4
  },
  input: {
    width: 200,
    borderColor: '#000',
    borderRadius: 2,
    height: 40
  }
});
