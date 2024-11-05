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
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const MusicHome = () => {
  const navigation = useNavigation();

  const suggestions = [
    {
      Image: require('../images/container26.png'),
    },
    {
      Image: require('../images/container27.png'),
    },
    {
      Image: require('../images/container26.png'),
    },
  ];

  const charts = [
    {
      title: 'Top 50',
      subtitle: 'Canada',
      additional: 'Daily chart-toppers update',
      Image: require('../images/container31.png'),
      songs: [
        {
    id: 1,
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    liked: true,
    cover: "https://i.ibb.co/BTXgcGR/cover1.png"
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    liked: true,
    cover: "https://i.ibb.co/tDSjjmq/cover2.png"
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "Ashley Scott",
    plays: "9M",
    duration: "4:02",
    liked: false,
    cover: "https://i.ibb.co/HT7GvCL/cover3.png"
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    liked: true,
    cover: "https://i.ibb.co/Bts82w0/cover4.png"
  },
  {
    id: 5,
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    liked: true,
    cover: "https://i.ibb.co/DbLsrjJ/cover5.png"
  },
  {
    id: 6,
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    liked: true,
    cover: "https://i.ibb.co/CJTxGxD/cover6.png"
  },
  {
    id: 7,
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    liked: true,
    cover: "https://i.ibb.co/CJTxGxD/cover6.png"
  },
  {
    id: 8,
    title: "Dynamite",
    artist: "Elena Jimenez",
    plays: "10M",
    duration: "6:22",
    liked: true,
    cover: ""
  },
      ],
    },
    {
      title: 'Top 50',
      subtitle: 'Global',
      additional: 'Daily chart-toppers update',
      Image: require('../images/container32.png'),
      songs: [{
    id: 1,
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    liked: true,
    cover: "https://i.ibb.co/BTXgcGR/cover1.png"
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    liked: true,
    cover: "https://i.ibb.co/tDSjjmq/cover2.png"
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "Ashley Scott",
    plays: "9M",
    duration: "4:02",
    liked: false,
    cover: "https://i.ibb.co/HT7GvCL/cover3.png"
  },
  {
    id: 4,
    title: "Levitating",
    artist: "Anthony Taylor",
    plays: "9M",
    duration: "7:48",
    liked: true,
    cover: "https://i.ibb.co/Bts82w0/cover4.png"
  },
  {
    id: 5,
    title: "Astronaut in the Ocean",
    artist: "Pedro Moreno",
    plays: "23M",
    duration: "3:36",
    liked: true,
    cover: "https://i.ibb.co/DbLsrjJ/cover5.png"
  }],
    },
    {
      title: 'Top 50',
      subtitle: 'Trending',
      additional: 'Daily chart-toppers update',
      Image: require('../images/container33.png'),
      songs: [{
    id: 1,
    title: "FLOWER",
    artist: "Jessica Gonzalez",
    plays: "2.1M",
    duration: "3:36",
    liked: true,
    cover: "https://i.ibb.co/BTXgcGR/cover1.png"
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Anthony Taylor",
    plays: "68M",
    duration: "3:35",
    liked: true,
    cover: "https://i.ibb.co/tDSjjmq/cover2.png"
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "Ashley Scott",
    plays: "9M",
    duration: "4:02",
    liked: false,
    cover: "https://i.ibb.co/HT7GvCL/cover3.png"
  },
 ],
    },
  ];


  const trendingAlbums = [
    {
      title: 'ME',
      artist: 'Jessica Gonzalez',
      Image: require('../images/image45.png'),
    },
    {
      title: 'Magna nost',
      artist: 'Brian Thomas',
      Image: require('../images/image46.png'),
    },
    {
      title: 'Magna nost',
      artist: 'Christopher',
      Image: require('../images/image47.png'),
    },
  ];

  const popularArtists = [
    {
      name: 'Jennifer Wilson',
      Image: require('../images/image39.png'),
    },
    {
      name: 'Elizabeth Hall',
      Image: require('../images/image40.png'),
    },
    {
      name: 'Anthony',
      Image: require('../images/image41.png'),
    },
    {
      name: 'Ryan Young',
      Image: require('../images/image63.png'),
    },
  ];

  const renderItem = ({ item, isChartItem }) => (
  <TouchableOpacity
    style={styles.item}
    activeOpacity={0.7}
    onPress={() => {
      if (isChartItem) {
        navigation.navigate('PlaylistDetailsAudio', { 
          playlistData: item, 
          songs: item.songs || []  
        });
      } else {
        navigation.navigate('MusicProfile');
      }
    }}
  >
    <Image source={item.Image} style={styles.itemImage} />
    <Text style={styles.title}>{item.title || item.name}</Text>
    <Text style={styles.subtitle}>{item.artist || item.subtitle}</Text>
  </TouchableOpacity>
);



  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../images/image36.png')}
        />
        <View style={styles.icons}>
          <Icon name="bell" size={20} style={{ marginRight: 20 }} />
          <Image
            style={styles.profileImage}
            source={require('../images/avt3.png')}
          />
        </View>
      </View>
      <Image source={require('../images/goodmorning.png')} />
      <Text style={styles.greeting}>Ashley Scott</Text>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput
          placeholder="What you want to listen to"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.sectionTitle}>Suggestions for you</Text>
      <FlatList
        data={suggestions}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item, index) => index.toString()} // Unique key for suggestions
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Charts</Text>
      <FlatList
        data={charts}
        renderItem={({ item }) => renderItem({ item, isChartItem: true })}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Trending Albums</Text>
      <FlatList
        data={trendingAlbums}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Popular artists</Text>
      <FlatList
        data={popularArtists}
        renderItem={({ item }) => renderItem({ item })}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
    </SafeAreaView>
    
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    padding: 5,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
  },
  searchInput: {
    flex: 1,
    color: '#333', // Changed to dark gray for better visibility
    padding: 10,
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
