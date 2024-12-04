import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import PlayandAudio from './Play&Audio'
const IconButton = ({ name, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon name={name} size={24} color="gray" />
  </TouchableOpacity>
);

const PlaylistDetailsAudio = ({ route }) => {
  const navigation = useNavigation();
  const { playlistData, songs } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  const renderSongItem = (item) => (
    <TouchableOpacity onPress={() => handleSongClick(item)}>
      <View style={styles.songItem}>
        <Image source={{ uri: item.cover }} style={styles.songCover} />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{item.title}</Text>
          <Text style={styles.songArtist}>{item.artist}</Text>
          <Text style={styles.songPlays}>{item.plays} plays</Text>
        </View>
        <Text style={styles.songDuration}>{item.duration}</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const handleSongClick = (song) => {
    setSelectedSong(song);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSong(null);
  };
  const navigateToSongDetails = () => {
    navigation.navigate('PlayandAudio', { song: selectedSong });
    closeModal(); 
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 40, color: '#999999' }}>&lt;</Text>
        </TouchableOpacity>
        <Image source={{ uri: "https://i.ibb.co/N2t3DCd/sharebutton.png" }} style={{ width: 30, height: 30, marginLeft: 300 }} />
      </View>
      <View style={styles.header}>
        <Image source={playlistData.Image} style={styles.playlistImage} />
        <View style={styles.headerInfo}>
          <Text style={styles.playlistTitle}>{playlistData.title} - {playlistData.subtitle}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, marginTop: 5 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={"heart"} size={24} color={'gray'} />
                <Text style={{ marginLeft: 5, color: 'gray' }}>1,234</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 40, textAlign: 'center', color: 'gray', marginBottom: 20, marginLeft: 10 }}>.</Text>
            <Text style={{ marginLeft: 10, color: 'gray' }}>05:10:18</Text>
          </View>
          <Text style={styles.playlistAdditional}>{playlistData.additional}</Text>
        </View>
      </View>
      <View style={styles.profileActions}>
        <TouchableOpacity onPress={toggleFollow}>
          <Icon name={isFollowed ? "heart" : "heart-o"} size={24} color={isFollowed ? "#FF1493" : "gray"} />
        </TouchableOpacity>
        <IconButton name="ellipsis-h" />
        <IconButton name="random" />
        <IconButton name="play" style={styles.playIcon} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {songs.map((song) => renderSongItem(song))}
      </ScrollView>

      {selectedSong && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={navigateToSongDetails}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedSong.cover }} style={styles.modalSongCover} />
              <View style={{ padding: 10, marginLeft: 10 }}>
                <Text style={styles.modalSongTitle}>{selectedSong.title}</Text>
                <Text style={styles.modalSongArtist}>{selectedSong.artist}</Text>
                <Text style={styles.modalSongDuration}>{selectedSong.duration}</Text>
              </View>
              <View style={styles.modalActions}>
                <Icon name="heart" size={20} color="gray" />
                <Icon name="play" size={20} color="gray" style={{ marginLeft: 20 }} />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  playlistImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  playlistAdditional: {
    color: 'gray',
    marginTop: 5,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  songCover: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: 'gray',
    fontSize: 14,
  },
  songPlays: {
    color: 'gray',
    fontSize: 12,
  },
  songDuration: {
    color: 'gray',
    marginRight: 10,
    fontSize: 14,
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#000',
    padding: 20,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    marginBottom: 82,
  },
  modalSongCover: {
    width: 60,
    height: 60,
  },
  modalSongTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSongArtist: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  modalSongDuration: {
    color: 'gray',
    fontSize: 14,
  },
  modalActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
  },
});

export default PlaylistDetailsAudio;
