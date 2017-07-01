import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Audio } from 'expo';
import _ from 'lodash';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      translation : {lang:'German',uri:'https://s3.amazonaws.com/respond-to-sneeze-project/german.mp3'}
    };
  }
  
  _loadLanguage = () => {
      let arrayOfTranslations = [
        {
          translation: {
            lang: 'German - Gesundheit',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/german.mp3'}
        },
        {
          translation: {
            lang: 'Italian - Salute',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/italian.mp3'}
        },
        {
          translation: {
            lang: 'Hebrew - לבריאות',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/hebrew.mp3'
          }
        },
        {
          translation: {
            lang: 'Russian - будьте здоровы',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/russian.mp3'
          }
        },
        {
          translation: {
            lang: 'French - à vos souhaits',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/french.mp3'
          }
        },
        {
          translation: {
            lang: 'Arabic - فرج',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/arabic.mp3'
          }
        },
        {
          translation: {
            lang: 'Farsi - عافیت_باشه',
            uri: 'https://s3.amazonaws.com/respond-to-sneeze-project/persian.mp3'
          }
        },
      ];
      let newTranslation = _.sample(arrayOfTranslations);
      this.setState(()=>newTranslation);
    };
  
  _handlePlaySoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: this.state.translation.uri,
    });
    await sound.playAsync();
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          How to Say Bless you In a Random Language!
        </Text>
        
        <Button
          title="Play a random translation of Bless you!"
          onPress={this._handlePlaySoundAsync}
        />
        
        <Text style={styles.bold}>
          This time in {this.state.translation.lang}
        </Text>
        
        <Button
          title="Load a new Language"
          onPress={this._loadLanguage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  bold: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
