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

const MusicHome = ({navigation}) => {

  return (
     <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require('../images/image112.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}>
        <View>
          <Image
            source={require('../images/Rectangle.png')}
          />
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../images/image113.png')}
          />
        </View>
        <View style={styles.centeredView}>
          <Image
            source={require('../images/welcomtopremium.png')}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 50,
              color: '#fff',
            }}>
            ...
          </Text>
          <TouchableOpacity
            style={styles.buttonBlack}
             onPress={()=>{
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
    position: 'absolute', // Đặt View ở vị trí tuyệt đối
    top: 90, // Đặt View ở phía dưới màn hình
    left: 0,
    right: 0,
    alignItems: 'center', // Căn giữa theo chiều ngang
    paddingBottom: 20, // Khoảng cách từ View tới cạnh dưới màn hình
  },
  centeredView: {
    position: 'absolute', // Đặt View ở vị trí tuyệt đối
    top: 420, // Đặt View ở phía dưới màn hình
    left: 0,
    right: 0,
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  image: {
    marginVertical: 120,
    marginBottom: -30,
    width: '80%',
    height: 100,
    resizeMode: 'contain',
  },
  buttonBlack: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  
});

export default MusicHome;
