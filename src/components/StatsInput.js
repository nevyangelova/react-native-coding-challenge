import React from 'react';
import { StyleSheet, TextInput, View, Text, ProgressViewIOS, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const StatsInput = () => {
  return (
    <View style={styles.container}>
      <ProgressViewIOS style={styles.progress} progress="0.4"/>

      <Text style={styles.heading}>How tall are you?</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <View style={styles.inputContainer}>
          <TextInput
          value="ft"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          value="in"
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
        <TouchableOpacity
          style={styles.buttonLeft}
          title="cm"
          color="#841584"
        />
        <TouchableOpacity
          style={styles.buttonRight}
          color="#841584"
        >
        <Text>ft</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonSubmit}
        color="#841584"
      >
        <Text>cm</Text>
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

  buttonRight: {
    backgroundColor: "#000",
    width: 75,
    height: 30,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    color: "#fff",
  },

  buttonLeft: {
    backgroundColor: "#fff",
    width: 75,
    height: 30,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    color: "#fff",
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
    flex: 0.4
  }
});

export default StatsInput;
