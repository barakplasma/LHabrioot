import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Audio } from 'expo';
import _ from 'lodash';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      translation : {lang:'German',uri:'https://apifree.forvo.com/audio/2g1m2q1h3n33383639383q1f1f3m1f3j362b2c392l3i2e232f383i39293i1i2f32222p3j212h3i3p1b24372j3c1f1j2a231k1b3p221l2g1f2d292i32242o2f232e2j27263b3i3239383236311m1j35383i2m3n263q2h1t1t_2f3q2n291o3m1i2d2p2a3d3n3b392e3o272p2p312e211t1t'}
    };
  }
  
  _loadLanguage = () => {
      let arrayOfTranslations = [
        {
          translation: {
            lang: 'German',
            uri: 'https://apifree.forvo.com/audio/2g1m2q1h3n33383639383q1f1f3m1f3j362b2c392l3i2e232f383i39293i1i2f32222p3j212h3i3p1b24372j3c1f1j2a231k1b3p221l2g1f2d292i32242o2f232e2j27263b3i3239383236311m1j35383i2m3n263q2h1t1t_2f3q2n291o3m1i2d2p2a3d3n3b392e3o272p2p312e211t1t'}
        },
        {
          translation: {
            lang: 'Italian',
            uri: 'https://apifree.forvo.com/audio/1m3o3o383c3d3f3a2k3n3j352m1i3o3c221k322k1j1f27281f333b1m332n3j1g2g2d2b2j3m1j2c22242h391b291f2c3m1f2f2b342i2a2q3m1f291h1n2a2k3h1f361j3n2l1l282f1l371n3o293h1f3i2n1b1b1g3431371t1t_37361n2i2i2d343g1n1l322i372c3p3o272f3q33232h1t1t'}
        },
        {
          translation: {
            lang: 'Hebrew',
            uri: 'https://apifree.forvo.com/audio/1p1n2c372g1l1i3g3o272f1l3g3b1g1p391h3n3e38313j3f2q1o1l383k1j3m3h2d1m3d2f312h1f392f2e2b2j231b272a3p22312i2i1i2c1g372e3i1j1m2f2a263a221o3f1h3o393k3i1f2f22333838223i34252b1f3n1t1t_3134313c293b2k2j26392b2g2e282f2b3i2f253p3d2h1t1t'
          }
        },
        {
          translation: {
            lang: 'Russian',
            uri: 'https://apifree.forvo.com/audio/1p3i3p3833313a2d312c3p3h2432323m1k38272g2o3b3n3m293h233q2b2b381l38312j293p1k2l322l251i2k2j2j3f2i1n3d292p3a1g3k1n1m3f2g2d2i3o2i351k2f3j282i3h311m3i2e23371n1k382g2q3c21352e371t1t_3h342e3h2g312h2323212b3d323m2o1p3a2b3b3d23211t1t'
          }
        },
        {
          translation: {
            lang: 'French',
            uri: 'https://apifree.forvo.com/audio/2g361p3o212c2j2h242k2i2h2b3p2j2n1m3o2d3d2j272a2h3p3p2f2a382f3k34273q232b3e243e2224342p2j3b1p3o262i251n3m3h2b241o3f33382h231g3f3k2a1j1o2e1n372l3d3b2d372o3b2d313b1j232g38292h1t1t_1f242e2n1l1g3i331b232e2a343g3o3d2h2f2k34332h1t1t'
          }
        },
        {
          translation: {
            lang: 'Arabic',
            uri: 'https://apifree.forvo.com/audio/1m3a3l3q2g3k2g3a1m1j3n2m2h3q1l2c241m3c332d3m1i3l1g381j1k2b2b1k3q3e1j1h3l31241n3c262n2e3i2q2m2c3i1j2m321l2n1f3h3d2p3j1l1m371b2g2l3m313i2g39231i21343b2d392l212d343q3o292a272h1t1t_3q1i3m1o1h3d2n221p3l222k2c292e3b253f391m242h1t1t'
          }
        },
        {
          translation: {
            lang: 'Farsi - عافیت_باشه',
            uri: 'https://apifree.forvo.com/audio/3e3d1b322e3h3a2i1h1p1k24213h1h3o232g3c2l1m3239291h1j3o292b3k1p2q2n1j1j26292k3m3h2g2e362k393p1i212q2k2k1b3a3g271l352c1l1n3j2n2m27212p2m253e292o3g271m3m3c2g1h2a34343a1j3c3h211t1t_1g3b2f37261p252g211b3l3k322k2j343q3d3b1b3h2h1t1t'
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
