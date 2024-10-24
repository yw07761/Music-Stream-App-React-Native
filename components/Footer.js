import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon
import { useNavigation } from '@react-navigation/native';

const Footer = ({ activeIndex, setActiveIndex }) => {
  const navigation = useNavigation();

  const handlePress = (index, item) => {
    setActiveIndex(index); // Cập nhật chỉ số hoạt động
    if (item === 'Home') {
      navigation.navigate('MusicHome'); // Chuyển đến màn hình MusicHome
    }
    // Thêm logic điều hướng cho các nút khác nếu cần
  };

  return (
    <View style={styles.footer}>
      {['Home', 'Search', 'Feed', 'Library'].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.footerItem}
          onPress={() => handlePress(index, item)} // Gọi hàm handlePress
        >
          <Icon
            name={
              item === 'Home'
                ? 'home'
                : item === 'Search'
                ? 'search'
                : item === 'Feed'
                ? 'rss'
                : 'book'
            }
            size={24} // Kích thước biểu tượng
            color={activeIndex === index ? '#1e90ff' : '#808080'} // Thay đổi màu sắc dựa trên chỉ số hoạt động
          />
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
});

export default Footer;
