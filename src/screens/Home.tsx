import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RHFInputs')}>
        <Text>RHF Inputs screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FormikInputs')}>
        <Text>Formik Inputs screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#b5f5f7',
    borderRadius: 8,
    padding: 20,
  },
});
