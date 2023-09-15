import React from 'react';
import {StyleSheet, View} from 'react-native';
import Wave from './wave';

const App = () => {
  return (
    <View style={styles.container}>
      <Wave size={250} progress={20} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
