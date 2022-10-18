import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RHFInputsScreen} from './src/screens/RHFInputsScreen';
import {Home} from './src/screens/Home';
import {FormikInputsScreen} from './src/screens/FormikInputsScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RHFInputs" component={RHFInputsScreen} />
        <Stack.Screen name="FormikInputs" component={FormikInputsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
