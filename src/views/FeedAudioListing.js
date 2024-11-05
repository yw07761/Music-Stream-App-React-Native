import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, FlatList, TextInput, Keyboard, SafeAreaView } from 'react-native';

const iconlikeden = "https://i.ibb.co/yPwYsGB/iconlikeden.jpg";
const iconliketrang = "https://i.ibb.co/Y3Hqwmz/iconliketrang.png";

const data = [
  {
    name: "Jessica Gonzalez",
    avt: "https://i.ibb.co/CHYYbCk/avt1.png",
    day: "3d",
    nameMusic: "FLOWER",
    view: "125",
    time: "05:15",
    text: "Great song!",
    liked: false,
    replies: [],
    imageMusic: "https://i.ibb.co/3T5zJ1v/imagemusic1.png",
    comments: 1,
    id: "1"
  },
  {
    name: "William King",
    avt: "https://i.ibb.co/pxYD0PB/avt2.png",
    day: "5d",
    nameMusic: "Me",
    view: "245",
    time: "05:15",
    text: "Love it!",
    liked: false,
    replies: [],
    imageMusic: "https://i.ibb.co/1mjzJtx/imagemusic2.png",
    comments: 2,
    id: "2"
  }
];

export default function FeedAudioListing() {
  const [isCommentModalVisible, setCommentModalVisible] = useState(false);
  const [comments, setComments] = useState(data.map(item => ({
    id: item.id,
    user: item.name,
    text: item.text,
    liked: item.liked,
    avatar: item.avt,
    replies: item.replies,
  })));
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState(null);

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: String(comments.length + 1),
          user: 'You',
          text: newComment,
          liked: false,
          avatar: "https://i.ibb.co/w6Tpmpf/avt1-2.png",
          replies: [],
        },
      ]);
      setNewComment('');
    }
  };

  const addReply = (commentId) => {
    if (replyText.trim()) {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: `${commentId}-${comment.replies.length + 1}`,
                  user: 'You',
                  text: replyText,
                  liked: false,
                  avatar: "https://i.ibb.co/w6Tpmpf/avt1-2.png",
                },
              ],
            }
          : comment
      ));
      setReplyText('');
      setReplyToCommentId(null);
      Keyboard.dismiss();
    }
  };

  const toggleLike = (commentId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? { ...comment, liked: !comment.liked }
        : comment
    ));
  };

  const toggleReplyLike = (commentId, replyId) => {
    setComments(comments.map(comment =>
      comment.id === commentId
        ? {
            ...comment,
            replies: comment.replies.map(reply =>
              reply.id === replyId
                ? { ...reply, liked: !reply.liked }
                : reply
            ),
          }
        : comment
    ));
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 5, width: '95%', alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 25, color: '#999999' }}>Feed</Text>
          <Image source={{ uri: "https://i.ibb.co/N2t3DCd/sharebutton.png" }} style={{ width: 30, height: 30, marginLeft: 275 }} />
        </View>
        {data.map((item) => (
          <View key={item.id} style={{ marginTop: 35 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={{ uri: item.avt }} style={{ width: 40, height: 40, borderRadius: 20 }} />
              <View>
                <Text style={{ fontSize: 15, marginLeft: 6, fontWeight: '600' }}>{item.name}</Text>
                <Image source={{ uri: "https://i.ibb.co/1v62STw/btntichxanh.png" }} style={{ width: 20, height: 20, marginLeft: 3, position: 'absolute', right: -23, top: 2 }} />
                <Text style={{ fontSize: 15, marginLeft: 6, color: '#999999' }}>Posted a track</Text>
                <Text style={{ fontWeight: '700', fontSize: 40, position: 'absolute', right: -15, top: -10, color: '#999999' }}>.</Text>
                <Text style={{ fontSize: 13, color: '#999999', position: 'absolute', top: 21, right: -32 }}>{item.day}</Text>
              </View>
            </View>

            <View style={{ marginTop: 10, position: 'relative' }}>
              <Image source={{ uri: item.imageMusic }} style={{ width: '100%', height: 350 }} />
              <View style={{
                borderWidth: 1,
                width: '100%',
                height: 80,
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                padding: 10
              }}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: '#fff' }}>{item.nameMusic}</Text>
                <Text style={{ fontSize: 15, color: '#fff' }}>{item.name}</Text>
                <Image source={{ uri: "https://i.ibb.co/tcjGScX/triangle.jpg" }} style={{ width: 15, height: 15, top: -15, right: -180 }} />
                <Text style={{ fontSize: 15, color: '#fff', top: -33, right: -200 }}>{item.view}</Text>
                <Text style={{ fontWeight: '700', fontSize: 40, right: -230, top: -78, color: '#fff' }}>.</Text>
                <Text style={{ fontSize: 15, color: '#fff', top: -100, right: -245 }}>{item.time}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image source={{ uri: "https://i.ibb.co/m4kktdn/timm.png" }} style={{ width: 20, height: 20, marginRight: 3 }} />
              <Text style={{ fontSize: 15, color: '#ccc' }}>20</Text>
              <TouchableOpacity onPress={() => { setCommentModalVisible(true); }}>
                <Image source={{ uri: "https://i.ibb.co/DGTM5dx/cmt.png" }} style={{ width: 20, height: 20, marginLeft: 20, marginRight: 3 }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 15, color: '#ccc' }}>{item.comments}</Text>
              <Image source={{ uri: "https://i.ibb.co/CK9mgnK/daonguoc.jpg" }} style={{ width: 20, height: 20, marginLeft: 20, marginRight: 3 }} />
              <Text style={{ fontSize: 15, color: '#ccc' }}>20</Text>
              <Text style={{ fontWeight: '700', fontSize: 30, position: 'absolute', right: -3, top: -10, color: '#999999' }}>...</Text>
            </View>
          </View>
        ))}

        <Modal
          visible={isCommentModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setCommentModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ width: '95%', backgroundColor: 'black', borderRadius: 10, padding: 20 }}>
              <Text style={{ color: '#fff', fontSize: 20 }}>Comments</Text>
              <FlatList
                data={comments}
                renderItem={({ item }) => (
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.user}</Text>
                    <Text style={{ color: '#ccc' }}>{item.text}</Text>
                    <TouchableOpacity onPress={() => toggleLike(item.id)}>
                      <Image source={item.liked ? { uri: iconlikeden } : { uri: iconliketrang }} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TextInput
                  value={newComment}
                  onChangeText={setNewComment}
                  placeholder="Write a comment..."
                  style={{
                    flex: 1,
                    height: 40,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                    backgroundColor: '#fff'
                  }}
                />
                <TouchableOpacity onPress={addComment}>
                  <Text style={{ color: '#007AFF', marginLeft: 10 }}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
