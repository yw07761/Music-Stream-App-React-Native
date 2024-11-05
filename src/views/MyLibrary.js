import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, TextInput,FlatList,SafeAreaView} from 'react-native';

const tabs = ["Playlists", "New tag", "Songs", "Albums", "Artists"];

const initialSongs = [
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
  
];

const Tab = ({ name, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: isSelected ? '#d1d1d1' : '#f1f1f1',
        marginRight: 10,
      }}
      onPress={() => onSelect(name)}
    >
      <Text style={{ color: isSelected ? '#000' : '#555' }}>{name}</Text>
    </TouchableOpacity>
  );
};

const SongItem = ({ song, onToggleLike }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
      <Image 
        source={{ uri: song.cover }} 
        style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12 }} 
      />
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{song.title}</Text>
        <Text style={{ color: '#777' }}>{song.artist}</Text>
        <Text style={{ color: '#777' }}>{song.plays} • {song.duration}</Text>
      </View>
      <TouchableOpacity onPress={() => onToggleLike(song.id)} style={{ marginLeft: 'auto' }}>
        <Text style={{ fontSize: 18 }}>{song.liked ? "💙" : "♡"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyLibrary = ({ navigation }) => { 
  const [selectedTab, setSelectedTab] = useState('Playlists');
  const [songs, setSongs] = useState(initialSongs);
  const [isFollowed, setIsFollowed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const toggleLike = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      )
    );
  };

  const toggleFollow = () => {
    setIsFollowed((prevFollowed) => !prevFollowed);
  };

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    if (tab === 'Playlists') {
      navigation.navigate('MyPlayLists'); 
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    if (isSearching) {
      clearSearch();
    }
  };

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView>
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Your Library</Text>
        <TouchableOpacity onPress={toggleSearch}>
          <Image  
            source={{ uri: "https://i.ibb.co/D4jBvWx/iconsearch.jpg" }}
            style={{ width: 30, height: 30,marginLeft:190}}
          />
        </TouchableOpacity>
      </View>

      {isSearching && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <TextInput
            placeholder="Enter the keyword you want to search for"
            value={searchTerm}
            onChangeText={handleSearch}
            style={{
              color: '#777777',
              borderWidth: 2,
              width: 360,
              height: 40,
              padding: 10,
              borderRadius: 25,
              borderColor: '#6699FF',
              marginRight: 10,
            }}
          />
          {searchTerm !== '' && (
            <TouchableOpacity onPress={clearSearch} style={{ position: 'absolute', right: 20, top: 10 }}>
              <Image
                source={{ uri: "https://i.ibb.co/N7m6tND/iconx.jpg" }}
                style={{ width: 20, height: 20, borderRadius: 10 }}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16}}>
        {tabs.map((tab) => (
          <Tab 
            key={tab} 
            name={tab} 
            isSelected={tab === selectedTab} 
            onSelect={handleTabSelect} 
          />
        ))}
      </ScrollView>
    

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Image
          source={{ uri: "https://i.ibb.co/17SgTnr/avt.png" }}
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mer Watson</Text>
          <Text style={{ color: '#777' }}>1.234K Followers</Text>
        </View>
        <TouchableOpacity
          onPress={toggleFollow}
          style={{
            marginLeft: 'auto',
            padding: 8,
            paddingHorizontal: 16,
            borderRadius: 16,
            backgroundColor: isFollowed ? '#007AFF' : '#000',
          }}
        >
          <Text style={{ color: '#fff' }}>{isFollowed ? 'Following' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{}}>
        {filteredSongs.map((song) => (
       <SongItem key={song.id} song={song} onToggleLike={toggleLike} />
      ))}
</ScrollView>

    </View>
    </SafeAreaView>
    
  );
};

