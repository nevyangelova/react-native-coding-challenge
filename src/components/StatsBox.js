import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

const StatsBox = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.label}>Goal</Text>
        <Text style={styles.label}>Lose weight</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.label}>Age</Text>
        <Text style={styles.label}>24</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.label}>Height</Text>
        <Text style={styles.label}>167cm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 287,
    height: 150,
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#ddd',
    shadowOffset: { height: 2, width: 2 },
    justifyContent: 'space-evenly'
  },

  label: {
    fontSize: 12
  }
});

export default StatsBox;
