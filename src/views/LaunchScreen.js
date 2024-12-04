import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get screen width and height
const { width, height } = Dimensions.get('window');

const MusicHome = () => {
  const navigation = useNavigation();

  const handleNavigateToLaunchPremium = () => {
    navigation.navigate('LaunchPremium');
  };

  const handleAlreadyHaveAccount = () => {
    navigation.navigate('HomeTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../images/Image30.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        {/* Ảnh phủ lên trên ảnh nền và làm mờ */}
        <View>
          <Image
            source={require('../images/Rectangle.png')}
            style={{ width: width, height: height * 0.4 }} 
          />
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../images/Image33.png')}
            style={{ width: width * 0.5 }} 
          />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../images/YourmusicYourartists.png')}
            style={[styles.image, { width: width * 0.8 }]} 
          />
          <TouchableOpacity
            style={[styles.buttonBlack, { width: width * 0.8 }]}
            onPress={handleNavigateToLaunchPremium}>
            <Text style={styles.buttonTextWhite}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonWhite, { width: width * 0.8 }]} 
            onPress={handleAlreadyHaveAccount}>
            <Text style={styles.buttonTextBlue}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  logo: {
    position: 'absolute',
    top: height * 0.1, 
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
  centeredView: {
    position: 'absolute',
    top: height * 0.45, 
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    marginBottom: 90,
    height: 150,
    resizeMode: 'contain',
  },
  buttonBlack: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonWhite: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextBlue: {
    color: '#12D7F7',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MusicHome;
