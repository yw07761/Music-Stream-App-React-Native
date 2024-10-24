import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MusicProfile from './components/MusicProfile';
import MusicHome from './components/MusicHome';
import LaunchScreen from './components/LaunchScreen';
import LaunchPremium from './components/LaunchPremium';
import SubscriptionPlans from './components/SubscriptionPlans';
import { Card } from 'react-native-paper'; // Nhập Card từ react-native-paper

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Card style={styles.cardContainer}>
          <Stack.Navigator initialRouteName="LaunchScreen">
            <Stack.Screen name="MusicHome" component={MusicHome} />
            <Stack.Screen name="MusicProfile" component={MusicProfile} />
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
            <Stack.Screen name="LaunchPremium" component={LaunchPremium} />
            <Stack.Screen name="SubscriptionPlans"component={SubscriptionPlans}/>
          </Stack.Navigator>
        </Card>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Allow SafeAreaView to take up the full screen height
  },
  cardContainer: {
    flex: 1, // Ensure Card expands to allow scrolling inside MusicProfile
    margin: 10, // Add some margin if needed
  },
});
