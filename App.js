import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff'}}>Welcome to Chris Iwaskiw app #1!!!!</Text>
        <Image   
        	style={{width: 400, height: 400}}       
          source={{uri: 'https://i.imgur.com/zY9gdHQ.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
