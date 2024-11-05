import React from 'react';
import { Text, ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PlayandAudio({ route }) {
  const { song } = route.params; 

  const isValidImageUrl = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <ImageBackground 
      source={isValidImageUrl(song?.cover) ? { uri: song.cover } : require('../images/image58.png')} 
      style={{ width: '100%', height: '100%' }}
    >
      <TouchableOpacity 
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100, paddingHorizontal: 20, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        <Text style={{ fontSize: 16, color: '#fff', marginTop: 20 }}>Play</Text>
        <Icon name="chevron-down" size={20} color="#fff" style={{ marginTop: 20, marginRight: 10 }} />
      </TouchableOpacity>

      <View style={{ position: 'absolute', bottom: -160, left: 0, right: 0, height: 430, backgroundColor: 'rgba(0, 0, 0, 0.2)', paddingHorizontal: 20 }}>
        {song ? ( 
          <>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>{song.title}</Text>
            <Text style={{ color: '#fff', fontSize: 16, marginBottom: 5 }}>{song.artist}</Text>
            <Text style={{ color: '#fff', fontSize: 14, marginBottom: 5 }}>{song.duration}</Text>
          </>
        ) : (
          <Text style={{ color: '#fff' }}>No song data available</Text>  
        )}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 5, marginLeft: 5 }}>
          <Icon name="random" size={25} color="#fff" />
          <Icon name="backward" size={25} color="#fff" />
          <Image source={require('../images/iconbutton3.png')} style={{ width: 60, height: 60 }} />
          <Icon name="forward" size={25} color="#fff" />
          <Icon name="ellipsis-h" size={25} color="#fff" />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
            <Icon name="heart-o" size={25} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 25 }}>12K</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 165 }}>
            <Icon name="comment-o" size={25} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 25 }}>12K</Text>
          </View>
          <Icon name="download" size={25} color="#fff" />
        </View>
      </View>
    </ImageBackground>
  );
}
