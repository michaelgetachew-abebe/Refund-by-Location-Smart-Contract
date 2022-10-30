import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Login from './src/screens/Login';
import Employer_Welcome from './src/screens/Employer_Welcome';
import Create_contract from './src/screens/Create_Contract/Create_Contract';

export default function App() {
  return (
    <SafeAreaView>
      <Create_contract />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});
