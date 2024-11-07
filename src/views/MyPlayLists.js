import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, Modal, TextInput, Button,SafeAreaView} from 'react-native';

export default MyPlayLists = ({ navigation }) => {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "FLOWER",
      artist: "Jessica Gonzalez",
      plays: "2.1M",
      duration: "3:36",
      liked: true,
      cover: "https://i.ibb.co/D7LwFQ6/cover7.png"
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Anthony Taylor",
      plays: "68M",
      duration: "3:35",
      liked: true,
      cover: "https://i.ibb.co/BfHSMf0/cover8.png"
    },
  ]);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [newSong, setNewSong] = useState({ title: '', artist: '', plays: '', duration: '', cover: '' });

  const handleAddSong = () => {
    setSongs((prevSongs) => [
      ...prevSongs,
      { id: songs.length + 1, ...newSong, liked: false },
    ]);
    setNewSong({ title: '', artist: '', plays: '', duration: '', cover: '' });
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, padding: 16,marginTop:50}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>

       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 40, color: '#999999' }}>&lt;</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Playlist</Text>
        <Image source={{uri:"https://i.ibb.co/N2t3DCd/sharebutton.png"}}
        style={{width:30,height:30}}
         />
      </View>

      <ScrollView>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Image source={{ uri: item.cover }} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12 }} />
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ color: '#777' }}>{item.artist}</Text>
                <Text style={{ color: '#777' }}>{item.plays} • {item.duration}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: '#f0f0f0',
          borderRadius: 25,
          padding: 10,
          elevation: 5,
        }}
      >
        <Image source={{ uri: "https://i.ibb.co/dM4TLVw/icon.png" }} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '98%', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Add New Song</Text>
            <TextInput
              placeholder="Title"
              value={newSong.title}
              onChangeText={(text) => setNewSong({ ...newSong, title: text })}
              style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <TextInput
              placeholder="Artist"
              value={newSong.artist}
              onChangeText={(text) => setNewSong({ ...newSong, artist: text })}
              style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <TextInput
              placeholder="Plays"
              value={newSong.plays}
              onChangeText={(text) => setNewSong({ ...newSong, plays: text })}
              style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <TextInput
              placeholder="Duration"
              value={newSong.duration}
              onChangeText={(text) => setNewSong({ ...newSong, duration: text })}
              style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <TextInput
              placeholder="Cover URL"
              value={newSong.cover}
              onChangeText={(text) => setNewSong({ ...newSong, cover: text })}
              style={{ borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10 }}
            />
            <Button title="Add Song" onPress={handleAddSong} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
     
   
  );
};

