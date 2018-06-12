import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import StatsBox from '../components/StatsBox';

export default class FinalScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/backgroundGrain.png')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/imgParsley.png')} style={styles.dumbbellImage} />
        <Image source={require('../assets/images/imgBeans.png')} style={styles.beansImage} />
        <Text style={styles.goalText}>Confirm your details:</Text>
        <View style={styles.container}>
          <StatsBox />
          <TouchableOpacity
            style={styles.buttonSubmit}
          >
            <Text style={{color: '#fff', alignSelf: 'center'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    position: 'absolute',
    top: '40%',
    height: 320,
    justifyContent: 'space-evenly'
  },

  logoImage: {
    position: 'absolute',
    top: '10%'
  },

  welcomeText: {
    position: 'absolute',
    top: '20%',
    fontSize: 12,
    fontWeight: 'bold'
  },

  goalText: {
    position: 'absolute',
    top: '30%',
    fontSize: 22,
    fontFamily: 'FiraSans-Bold',
    fontWeight: 'bold'
  },

  beansImage: {
    alignSelf: 'flex-start',
  },

  dumbbellImage: {
    alignSelf: 'flex-end',
  },

  buttonSubmit: {
    backgroundColor: "#000",
    width: 110,
    height: 40,
    borderRadius: 50,
    color: "#fff",
    alignSelf: 'center',
    marginTop: 100,
    justifyContent: 'center',
    fontWeight: 'bold'
  }
});
