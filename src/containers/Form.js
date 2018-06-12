import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AgeInput from '../components/AgeInput';
import StatsInput from '../components/StatsInput';

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatsInput />
        <TouchableOpacity
          style={styles.buttonSubmit}
          title="cm"
          color="#841584"
        >
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  heading: {
    position: 'absolute',
    top: '20%',
    fontSize: 22,
    fontWeight: 'bold'
  },

  buttonSubmit: {
    backgroundColor: "#000",
    width: 110,
    height: 40,
    borderRadius: 50,
    color: "#fff",
    alignSelf: 'center',
    marginTop: 100
  }
});
