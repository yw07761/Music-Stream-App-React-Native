import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LaunchScreen = ({navigation}) => {


  const handleCreateAccount = () => {
    navigation.navigate('LaunchPremium');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../images/Rectangle.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        {/* Ảnh phủ lên trên ảnh nền và làm mờ */}
        <View>
          <Image
            source={require('../images/Rectangle.png')}
          />
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../images/Image33.png')}
          />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../images/YourmusicYourartists.png')}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.buttonBlack}
            onPress={()=>{
                navigation.navigate('LaunchPremium');
            }}>
            <Text style={styles.buttonTextWhite}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWhite}
            onPress={()=>{
                navigation.navigate('HomeTabs');
            }}>
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
    position: 'absolute', // Đặt View ở vị trí tuyệt đối
    top: 90, // Đặt View ở phía dưới màn hình
    left: 0,
    right: 0,
    alignItems: 'center', // Căn giữa theo chiều ngang
    paddingBottom: 20, // Khoảng cách từ View tới cạnh dưới màn hình
  },
  centeredView: {
    position: 'absolute', // Đặt View ở vị trí tuyệt đối
    top: 400, // Đặt View ở phía dưới màn hình
    left: 0,
    right: 0,
    alignItems: 'center', // Căn giữa theo chiều ngang
    paddingBottom: 20, // Khoảng cách từ View tới cạnh dưới màn hình
  },
  image: {
    marginBottom: 90,
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  buttonBlack: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 15, 
    width: '80%', 
    alignItems: 'center', 
  },
  buttonWhite: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: '80%', 
    alignItems: 'center', 
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextBlue: {
    color: '#12D7F7', // Màu chữ xanh
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LaunchScreen;
