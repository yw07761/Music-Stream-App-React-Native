import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';

const MusicHome = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(null);

  const suggestions = [
    {
      Image: require('../assets/all_images/Home - Audio Listing/Container 26.png'),
    },
    {
      Image: require('../assets/all_images/Home - Audio Listing/Container 27.png'),
    },
    {
      Image: require('../assets/all_images/Home - Audio Listing/Container 26.png'),
    },
  ];

  const charts = [
    {
      title: 'Top 50',
      subtitle: 'Canada',
      additional: 'Daily chart-toppers update',
      Image: require('../assets/all_images/Home - Audio Listing/Container 31.png'),
    },
    {
      title: 'Top 50',
      subtitle: 'Global',
      additional: 'Daily chart-toppers update',
      Image: require('../assets/all_images/Home - Audio Listing/Container 32.png'),
    },
    {
      title: 'Top 50',
      subtitle: 'Trending',
      additional: 'Daily chart-toppers update',
      Image: require('../assets/all_images/Home - Audio Listing/Container 33.png'),
    },
  ];

  const trendingAlbums = [
    {
      title: 'ME',
      artist: 'Jessica Gonzalez',
      Image: require('../assets/all_images/Home - Audio Listing/Image 45.png'),
    },
    {
      title: 'Magna nost',
      artist: 'Brian Thomas',
      Image: require('../assets/all_images/Home - Audio Listing/Image 46.png'),
    },
    {
      title: 'Magna nost',
      artist: 'Christopher',
      Image: require('../assets/all_images/Home - Audio Listing/Image 47.png'),
    },
  ];

  const popularArtists = [
    {
      name: 'Jennifer Wilson',
      Image: require('../assets/all_images/Home - Audio Listing/Image 39.png'),
    },
    {
      name: 'Elizabeth Hall',
      Image: require('../assets/all_images/Home - Audio Listing/Image 40.png'),
    },
    {
      name: 'Anthony',
      Image: require('../assets/all_images/Home - Audio Listing/Image 41.png'),
    },
    {
      name: 'Ryan Young',
      Image: require('../assets/all_images/Artist Profile/Image63.png'),
    },
  ];

  const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>  {/* Thay đổi từ TouchableOpacity sang View */}
    <TouchableOpacity 
      style={styles.item} 
      activeOpacity={0.7} 
      onPress={() => navigation.navigate('MusicProfile')} // Chuyển hướng Popular artists
    >
      <Image source={item.Image} style={styles.itemImage} />
      <Text style={styles.title}>{item.title || item.name}</Text>
      <Text style={styles.subtitle}>{item.artist || item.subtitle}</Text>
    </TouchableOpacity>
  </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/all_images/Home - Audio Listing/Image 36.png')}
        />
        <View style={styles.icons}>
          <Icon name="bell" size={20} style={{ marginRight: 20 }} />

          <Image
            style={styles.profileImage}
            source={require('../assets/all_images/Home - Audio Listing/Avatar 3.png')}
          />
        </View>
      </View>
      <Image
        source={require('../assets/all_images/Home - Audio Listing/Good morning,.png')}
      />
      <Text style={styles.greeting}>Ashley Scott</Text>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} style={styles.searchIcon} />{' '}
        {/* Sử dụng biểu tượng search */}
        <TextInput
          placeholder="What you want to listen to"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Suggestions for you</Text>
      <FlatList
        data={suggestions}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} activeOpacity={0.7}>
            <Image
              source={item.Image}
              style={{ width: 230, height: 300, borderRadius: 5 }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.artist}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Charts</Text>
      <FlatList
        data={charts}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Trending Albums</Text>
      <FlatList
        data={trendingAlbums}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Popular artists</Text>
      <FlatList
        data={popularArtists}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Footer activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 30,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1, // Thêm đường viền cho khung tìm kiếm
    borderColor: '#ccc', // Màu đường viền
    borderRadius: 50, // Bo góc khung tìm kiếm
    padding: 5, // Khoảng cách bên trong khung
    backgroundColor: '#fff', // Màu nền khung tìm kiếm
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10, // Khoảng cách giữa biểu tượng và input
    fontSize: 20, // Kích thước biểu tượng
  },
  searchInput: {
    flex: 1,
    color: '#ccc',
    padding: 10, // Khoảng cách bên trong input
  },
  sectionTitle: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  list: {
    paddingVertical: 10,
  },
  item: {
    marginRight: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },
});

export default MusicHome;
