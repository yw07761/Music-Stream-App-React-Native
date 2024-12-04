import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const LaunchPremium = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../images/image112.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <View>
          <Image
            source={require('../images/Rectangle.png')}
            style={{ width: width, height: height * 0.4 }} 
          />
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../images/image113.png')}
            style={{ width: width * 0.5 }} 
          />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../images/welcomtopremium.png')}
            style={[styles.image, { width: width * 0.8 }]} 
          />
          <Text style={styles.text}>
            ...
          </Text>
          <TouchableOpacity
            style={[styles.buttonBlack, { width: width * 0.8 }]} 
            onPress={() => {
              navigation.navigate('SubscriptionPlans');
            }}>
            <Text style={styles.buttonTextWhite}>Start listening</Text>
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
  },
  image: {
    marginVertical: 120,
    marginBottom: -30,
    resizeMode: 'contain',
  },
  buttonBlack: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 50,
    color: '#fff',
  },
});

export default LaunchPremium;
