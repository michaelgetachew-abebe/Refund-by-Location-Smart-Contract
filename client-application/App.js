import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/Login';
import Employer_Welcome from './src/screens/Employer_Welcome/Employer_Welcome';
import Create_contract from './src/screens/Create_Contract/Create_Contract';
import Track_Employee from './src/screens/Track_Employee'; 
import Employee_Welcome from './src/screens/Employee_Welcome/Employee_Welcome';
import Connect_Mask from './src/screens/Connect_Mask/Connect_Mask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Connect" component={Connect_Mask} />
        <Stack.Screen name="Welcome" component={Employer_Welcome} />
        <Stack.Screen name="Create" component={Create_contract} />
        <Stack.Screen name="Track" component={Track_Employee} />
        <Stack.Screen name="Welcome Employee" component={Employee_Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});
