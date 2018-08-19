import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMain: true };
  }

  changePage = () => {
    this.setState(
      prev => {
        return ({
          isMain: !prev.isMain
        })
      }
    )
}

  render() {
      if(this.state.isMain) {
      return (<View style={styles.container}>
        <Button
          onPress={this.changePage}
          title="Switch Pages"
          color="#841584"
          accessibilityLabel="Learn!"
        />
        <Text style={{ color: '#fff'}}>Welcome to Chris Iwaskiw app #1!!!!</Text>
        <Text style={{ color: '#fff'}}>Please make yourself at home...</Text>
        <Text style={{ color: '#fff'}}>{this.state.isMain.toString()}</Text>
        <Image
        	style={{width: 400, height: 400}}
          source={{uri: 'https://i.imgur.com/zY9gdHQ.jpg'}}
        />
      </View>)
    } else {
      return (<View style={styles.container}>
        <Button
            onPress={this.changePage}
          title="Switch Pages"
          color="#841584"
          accessibilityLabel="Learn!"
        />
        <Text style={{ color: '#fff'}}>This is an alternate page.</Text>
        <Image
        	style={{width: 400, height: 400}}
          source={{uri: 'https://pbs.twimg.com/media/BoavZpDIAAAfiGO.png'}}
        />
      </View>)
    }
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
