import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import GoalBox from '../components/GoalBox';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={require('../assets/images/backgroundGrain.png')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/icon8Logo.png')} style={styles.logoImage} />
        <Text style={styles.welcomeText}>WELCOME TO 8FIT</Text>
        <Image source={require('../assets/images/imgBeans.png')} style={styles.beansImage} />
        <Text style={styles.goalText}>What&#39;s your goal?</Text>
        <Image source={require('../assets/images/imgDumbbell.png')} style={styles.dumbbellImage} />

        <View style={styles.container}>
          <GoalBox navigateToQuestion={() =>
            navigate('Form')
          }
          />
          <GoalBox />
          <GoalBox />
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
    fontWeight: 'bold'
  },

  beansImage: {
    alignSelf: 'flex-start',
  },

  dumbbellImage: {
    alignSelf: 'flex-end',
  }
});
