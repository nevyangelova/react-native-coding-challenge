import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

const StatsBox = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.heading}>Goal</Text>
        <Text style={styles.goalText}>Lose weight</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.heading}>Age</Text>
        <Text style={styles.goalText}>24</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#e0e0e0', borderBottomWidth: 1}}>
        <Text style={styles.heading}>Height</Text>
        <Text style={styles.goalText}>167cm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    width: 287,
    height: 150,
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#ddd',
    shadowOffset: { height: 2, width: 2 },
    justifyContent: 'center'
  },

  goalText: {
    fontSize: 16
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  arrow: {
    alignSelf: 'flex-end',
  }
});

export default StatsBox;
