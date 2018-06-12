import React from 'react';
import { StyleSheet, TextInput, View, Text, ProgressViewIOS } from 'react-native';
import PropTypes from 'prop-types';

const AgeInput = () => {
  return (
    <View style={styles.container}>
      <ProgressViewIOS style={styles.progress} progress="0.4"/>

      <Text style={styles.heading}>How old are you?</Text>
      <View style={styles.inputContainer}>
        <TextInput
        />
      </View>
      <TouchableOpacity
        style={styles.buttonSubmit}
        title="cm"
        color="#841584"
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    paddingTop: 50
  },
  heading: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },

  progress: {
    width: "100%",
    progressTintColor: '#639',
    trackTintColor: "green"
  },

  buttonSubmit: {
    backgroundColor: "#000",
    width: 110,
    height: 40,
    borderRadius: 50,
    color: "#fff",
    alignSelf: 'center',
    marginTop: 100
  },

  inputContainer: {
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    width: '80%',
    alignSelf: 'center'
  }
});

export default AgeInput;
