import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện biểu tượng

const MusicProfile = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFollowed, setIsFollowed] = useState(false); // State để theo dõi trạng thái nhấn nút

  const toggleFollow = () => {
    setIsFollowed(!isFollowed); // Đảo ngược trạng thái khi nhấn
  };

  const popularSongs = [
    {
      id: '1',
      title: 'Let You Free',
      artist: 'Ryan Young',
      image: require('../assets/all_images/Artist Profile/Image 66.png'),
      details: '68M • 03:35',
    },
    {
      id: '2',
      title: 'Blinding Lights',
      artist: 'Ryan Young',
      image: require('../assets/all_images/Artist Profile/Image 67.png'),
      details: '93M • 04:39',
    },
    {
      id: '3',
      title: 'Levitating',
      artist: 'Ryan Young',
      image: require('../assets/all_images/Artist Profile/Image 68.png'),
      details: '9M • 07:48',
    },
    {
      id: '4',
      title: 'Astronaut  in the Oncean',
      artist: 'Ryan Young',
      image: require('../assets/all_images/Artist Profile/Image 69.png'),
      details: '23M • 03:36',
    },
    {
      id: '5',
      title: 'Dynamite',
      artist: 'Ryan Young',
      image: require('../assets/all_images/Artist Profile/Image 70.png'),
      details: '10M • 06:22',
    },
  ];

  const albums = [
    {
      id: '1',
      title: 'ME',
      artist: 'Jessica Gonzalez',
      cover: require('../assets/all_images/Artist Profile/Image 71.png'),
    },
    {
      id: '2',
      title: 'Mangna nost',
      artist: 'Jessica Gonzalez',
      cover: require('../assets/all_images/Artist Profile/Image 72.png'),
    },
    {
      id: '3',
      title: 'Prodient',
      artist: 'Jessica Gonzalez',
      cover: require('../assets/all_images/Artist Profile/Image 77.png'),
    },
  ];

  const aboutText =
    'Ryan Young is known for his incredible vocal range and captivating performances. He has released multiple albums and has a strong fan base. Ryan Young is known for his incredible vocal range and captivating performances. He has released multiple albums and has a strong fan ';

  const fansAlsoLike = [
    {
      id: '1',
      name: 'Magna Nost',
      artist: 'Jessica Gonzalez',
      image: require('../assets/all_images/Artist Profile/Image 74.png'),
    },
    {
      id: '2',
      name: 'Exercitatio',
      artist: 'Brian Harris',
      image: require('../assets/all_images/Artist Profile/Image 75.png'),
    },
    {
      id: '3',
      name: 'Tempoer Nost',
      artist: 'Tyler Gonzalez',
      image: require('../assets/all_images/Artist Profile/Image 76.png'),
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/all_images/Artist Profile/Image63.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>Ryan Young</Text>
        <Text style={styles.followers}>65.1K Followers</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.profileActions}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isFollowed ? '#87CEEB' : 'transparent' },
          ]} // Màu nền thay đổi
          onPress={toggleFollow} // Gọi hàm khi nhấn
        >
          <Text style={{ color: isFollowed ? '#fff' : '#ccc' }}>Follow</Text>{' '}
          {/* Thay đổi màu chữ */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="ellipsis-h"
            size={20}
            style={{
              color: '#ccc',
              marginRight: 40,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="random"
            size={20}
            style={{
              color: '#ccc',
              marginRight: -10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name="play"
            size={20}
            color="#ffffff"
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 18,
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Popular Songs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          data={popularSongs}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Albums */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Albums</Text>
        <FlatList
          data={albums}
          renderItem={renderAlbumItem}
          keyExtractor={(item) => item.id}
          horizontal // Hiển thị danh sách ngang
          showsHorizontalScrollIndicator={true} // Ẩn chỉ báo cuộn ngang
        />
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Image
          source={require('../assets/all_images/Artist Profile/Image 73.png')}
          style={styles.aboutImage}
        />
        <Text>{aboutText}</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Fans also like */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fans also like</Text>
        <FlatList
          data={fansAlsoLike}
          renderItem={renderFanItem}
          keyExtractor={(item) => item.id}
          horizontal // Hiển thị danh sách ngang
          showsHorizontalScrollIndicator={true} // Ẩn chỉ báo cuộn ngang
        />
      </View>

      <Footer activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
    flexDirection: 'column', // Thay đổi hướng
    alignItems: 'center',
    marginRight: 20, // Khoảng cách giữa các album
  },
  albumImage: {
    width: 120, // Kích thước lớn hơn cho ảnh album
    height: 120,
    borderRadius: 10,
  },
  fanItem: {
    flexDirection: 'column', // Thay đổi hướng
    alignItems: 'center',
    marginRight: 20, // Khoảng cách giữa các fan
  },
  fanImage: {
    width: 120, // Kích thước lớn hơn cho ảnh fan
    height: 120,
    borderRadius: 10,
  },

  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontWeight: 'bold',
  },
  fanInfo: {
    flex: 1,
  },
  fanTitle: {
    fontWeight: 'bold',
  },
  aboutImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewMore: {
    color: '#007BFF',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MusicProfile;
