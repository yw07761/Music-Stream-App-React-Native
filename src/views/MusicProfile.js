import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MusicProfile = ({ navigation }) => {
  const [isFollowed, setIsFollowed] = useState(false); 

  const toggleFollow = () => {
    setIsFollowed((prev) => !prev);
  };

  const popularSongs = [
    {
      id: '1',
      title: 'Let You Free',
      artist: 'Ryan Young',
      image: require('../images/image66.png'),
      details: '68M • 03:35',
    },
    {
      id: '2',
      title: 'Blinding Lights',
      artist: 'Ryan Young',
      image: require('../images/image67.png'),
      details: '93M • 04:39',
    },
    {
      id: '3',
      title: 'Levitating',
      artist: 'Ryan Young',
      image: require('../images/image68.png'),
      details: '9M • 07:48',
    },
    {
      id: '4',
      title: 'Astronaut in the Ocean',
      artist: 'Ryan Young',
      image: require('../images/image69.png'),
      details: '23M • 03:36',
    },
    {
      id: '5',
      title: 'Dynamite',
      artist: 'Ryan Young',
      image: require('../images/image70.png'),
      details: '10M • 06:22',
    },
  ];

  const albums = [
    {
      id: '1',
      title: 'ME',
      artist: 'Jessica Gonzalez',
      cover: require('../images/image71.png'),
    },
    {
      id: '2',
      title: 'Magna Nost',
      artist: 'Jessica Gonzalez',
      cover: require('../images/image72.png'),
    },
    {
      id: '3',
      title: 'Prodient',
      artist: 'Jessica Gonzalez',
      cover: require('../images/image77.png'),
    },
  ];

  const aboutText =
    'Ryan Young is known for his incredible vocal range and captivating performances. He has released multiple albums and has a strong fan base.';

  const fansAlsoLike = [
    {
      id: '1',
      name: 'Magna Nost',
      artist: 'Jessica Gonzalez',
      image: require('../images/image74.png'),
    },
    {
      id: '2',
      name: 'Exercitatio',
      artist: 'Brian Harris',
      image: require('../images/image75.png'),
    },
    {
      id: '3',
      name: 'Tempoer Nost',
      artist: 'Tyler Gonzalez',
      image: require('../images/image76.png'),
    },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <Text style={styles.songDetails}>{item.details}</Text>
      </View>
    </View>
  );

  const renderAlbumItem = ({ item }) => (
    <View style={styles.albumItem}>
      <Image source={item.cover} style={styles.albumImage} />
      <View style={styles.albumInfo}>
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Text style={styles.albumArtist}>{item.artist}</Text>
      </View>
    </View>
  );

  const renderFanItem = ({ item }) => (
    <View style={styles.fanItem}>
      <Image source={item.image} style={styles.fanImage} />
      <View style={styles.fanInfo}>
        <Text style={styles.fanTitle}>{item.name}</Text>
        <Text style={styles.fanArtist}>{item.artist}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../images/image63.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>Ryan Young</Text>
        <Text style={styles.followers}>65.1K Followers</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.profileActions}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isFollowed ? '#87CEEB' : 'transparent' }]} 
          onPress={toggleFollow}
        >
          <Text style={{ color: isFollowed ? '#fff' : '#ccc' }}>Follow</Text>
        </TouchableOpacity>
        <IconButton name="ellipsis-h" />
        <IconButton name="random" />
        <IconButton name="play" style={styles.playIcon} />
      </View>

      {/* Popular Songs */}
      <Section title="Popular">
        <FlatList
          data={popularSongs}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id}
        />
      </Section>

      {/* Albums */}
      <Section title="Albums">
        <FlatList
          data={albums}
          renderItem={renderAlbumItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Image
          source={require('../images/image73.png')}
          style={styles.aboutImage}
        />
        <Text>{aboutText}</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Fans also like */}
      <Section title="Fans also like">
        <FlatList
          data={fansAlsoLike}
          renderItem={renderFanItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Section>
    </ScrollView>
    </SafeAreaView>
    
  );
};

const IconButton = ({ name, style }) => (
  <TouchableOpacity style={[styles.icon, style]}>
    <Icon name={name} size={20} style={{ color: '#ccc' }} />
  </TouchableOpacity>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,padding:10
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    marginTop: 10,
  },
  followers: {
    color: '#888',
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20,
  },
  button: {
    padding: 10,
    width: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 15,
    alignItems: 'center',
  },
  playIcon: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 50,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#808080',
  },
  songDetails: {
    color: '#808080',
  },
  albumItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
  },
  albumImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  fanItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
  },
  fanImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontWeight: 'bold',
  },
  albumArtist: {
    color: '#808080',
  },
  fanTitle: {
    fontWeight: 'bold',
  },
  fanArtist: {
    color: '#808080',
  },
  aboutImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  viewMore: {
    color: '#1E90FF',
    marginTop: 5,
  },
});

export default MusicProfile;
