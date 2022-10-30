import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Login from './src/screens/Login';
import Employer_Welcome from './src/screens/Employer_Welcome';
import Create_contract from './src/screens/Create_Contract/Create_Contract';
import Employee_Welcome from './src/screens/Employee_Welcome';
import Track_Employee from './src/screens/Track_Employee/Track_Employee';

export default function App() {
  return (
    <SafeAreaView>
      <Track_Employee />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});
