import React from 'react';
import { StyleSheet, Text, View, Image, NavigatorIOS } from 'react-native';
import PropTypes from 'prop-types';

const GoalBox = (navigateToQuestion) => {
  return (
    <View style={styles.container}>
      <Button onPress={navigateToQuestion}>
        <Text style={styles.heading}>Lose weight</Text>
        <Text style={styles.goalText}>Burn fat & get lean</Text>
        <Image source={require('../assets/images/chevronRight.png')} style={styles.arrow} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    width: 309,
    height: 94,
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#ddd',
    shadowOffset: { height: 2, width: 2 },
    justifyContent: 'center'
  },

  goalText: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    fontSize: 16
  },

  heading: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    fontSize: 20,
    fontWeight: 'bold'
  },

  arrow: {
    alignSelf: 'flex-end',
  }
});

GoalBox.PropTypes = {
  navigateToQuestion: proptype.func.isRequired
}

export default GoalBox;
