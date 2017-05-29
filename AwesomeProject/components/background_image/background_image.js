import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./polish.jpg')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}

export default class TestBackgroundImage extends Component {
    render() {
        return (
            <BackgroundImage>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          NAIL SWATCH
        </Text>
        <Text style={styles.instructions}>
          Swatch all of your favorite nail colors·
        {"\n"} to decide which one you'll get next.
        </Text>
      </View>
            </BackgroundImage>
        ) 
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Avenir-Light',
    letterSpacing: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    }
});

