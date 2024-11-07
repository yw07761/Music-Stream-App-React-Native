import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LanchScreen from './src/views/LaunchScreen';
import LaunchPremium from './src/views/LaunchPremium';
import MusicHome from './src/views/MusicHome';
import AudioListingSearchResults from './src/views/AudioListingSearchResults';
import FeedAudioListing from './src/views/FeedAudioListing';
import MyLibrary from './src/views/MyLibrary';
import MyPlayLists from './src/views/MyPlayLists';
import PlaylistDetailsAudio from './src/views/PlaylistDetailsAudioListing';
import MusicProfile from './src/views/MusicProfile';
import SubscriptionPlans from './src/views/SubscriptionPlans';
import PlayandAudio from './src/views/Play&Audio'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack cho Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MusicHome" component={MusicHome} options={{ headerShown: false }} />
      <Stack.Screen name="PlaylistDetailsAudio" component={PlaylistDetailsAudio} options={{ headerShown: false }} />
      <Stack.Screen name="MusicProfile" component={MusicProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Stack cho Search
function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AudioListingSearchResults" component={AudioListingSearchResults} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Stack cho Feed
function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedAudioListing" component={FeedAudioListing} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Stack cho Library
function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyLibrary" component={MyLibrary} options={{ headerShown: false }} />
      <Stack.Screen name="MyPlayLists" component={MyPlayLists} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarIcon: () => (
            <Image source={require('./src/images/iconHome.png')} style={{ width: 40, height: 40 }} resizeMode='stretch' />
          ),
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchStack} 
        options={{
          tabBarIcon: () => (
            <Image source={require('./src/images/iconsearch.jpg')} style={{ width: 30, height: 30 }} resizeMode='stretch' />
          ),
        }} 
      />
      <Tab.Screen 
        name="Feed" 
        component={FeedStack} 
        options={{
          tabBarIcon: () => (
            <Image source={require('./src/images/iconfeed.png')} style={{ width: 20, height: 20 }} resizeMode='stretch' />
          ),
        }} 
      />
      <Tab.Screen 
        name="Library" 
        component={LibraryStack} 
        options={{
          tabBarIcon: () => (
            <Image source={require('./src/images/iconlibrary.png')} style={{ width: 30, height: 30 }} resizeMode='stretch' />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="LanchScreen" component={LanchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="PlayandAudio" component={PlayandAudio} options={{ headerShown: false }} />
          <Stack.Screen name="LaunchPremium" component={LaunchPremium} options={{ headerShown: false }} />
            <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
