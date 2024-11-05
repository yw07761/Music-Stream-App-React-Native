import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, TextInput,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const tabs = ["All", "Tracks", "Albums", "Artists"];

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

const Tab = ({ name, isSelected, onSelect }) => (
  <TouchableOpacity onPress={() => onSelect(name)} style={{ marginRight: 15 }}>
    <Text style={{ fontWeight: isSelected ? 'bold' : 'normal', color: isSelected ? '#007AFF' : '#555' }}>{name}</Text>
    {isSelected && <View style={{ height: 2, backgroundColor: '#007AFF', marginTop: 4 }} />}
  </TouchableOpacity>
);

const SongItem = ({ song }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
    <Image source={{ uri: song.cover }} style={{ width: 50, height: 50, borderRadius: 8, marginRight: 12 }} />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{song.title}</Text>
      <Text style={{ color: '#777' }}>{song.artist}</Text>
      <Text style={{ color: '#777' }}>{song.plays} • {song.duration}</Text>
    </View>
    <TouchableOpacity>
      <Text style={{ fontSize: 20 }}>...</Text>
    </TouchableOpacity>
  </View>
);

const AudioListingSearchResults = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [isFollowed, setIsFollowed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFollow = () => setIsFollowed(!isFollowed);

  const handleTabSelect = (tab) => setSelectedTab(tab);

  const handleClearSearch = () => setSearchTerm("");

  const filteredSongs = initialSongs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView>
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          marginRight: 10,
        }}>
          <TextInput
            placeholder="Search"
            value={searchTerm}
            onChangeText={setSearchTerm}
            style={{
              flex: 1,
              paddingVertical: 8,
              fontSize: 16,
              borderRadius: 20,
              paddingHorizontal: 20,
              backgroundColor: '#f0f0f0',
              color: '#333',
              position:'relative',
              borderWidth:1,
              borderColor:'#666666'
  
            }}
          />
           {searchTerm.length > 0 && (
             <TouchableOpacity onPress={handleClearSearch}>
              <Icon name="times-circle" size={18} color="#888888" style={{ marginLeft: 8 ,position:'absolute',top:-10,right:10}} />
            </TouchableOpacity>
          )}
            
           
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        {tabs.map(tab => (
          <Tab key={tab} name={tab} isSelected={tab === selectedTab} onSelect={handleTabSelect} />
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Image source={{ uri: "https://i.ibb.co/17SgTnr/avt.png" }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mer Watson</Text>
          <Text style={{ color: '#777' }}>1.234K Followers</Text>
        </View>
        <TouchableOpacity onPress={toggleFollow} style={{
          marginLeft: 'auto',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: isFollowed ? '#007AFF' : '#000',
          backgroundColor: isFollowed ? '#007AFF' : '#FFF'
        }}>
          <Text style={{ color: isFollowed ? '#FFF' : '#000' }}>{isFollowed ? 'Following' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{}}>
        {filteredSongs.map(song => (
          <SongItem key={song.id} song={song} />
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
    
  );
};

export default AudioListingSearchResults;
