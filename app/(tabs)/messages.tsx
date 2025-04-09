import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Search, Settings, Send } from 'lucide-react-native';
import { useState } from 'react';
import { router } from 'expo-router';

const MESSAGES = [
  {
    id: '1',
    name: 'Sarah Chen',
    message: 'Hey, how are you doing?',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    time: '2m ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Emily Parker',
    message: 'Would love to hear about your day!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    time: '15m ago',
    unread: false,
  },
  {
    id: '3',
    name: 'Jessica Williams',
    message: 'That sounds great! When are you free?',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
    time: '1h ago',
    unread: true,
  },
];

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Settings size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.messagesList}>
        {MESSAGES.map((message) => (
          <TouchableOpacity 
            key={message.id} 
            style={styles.messageItem}
            onPress={() => router.push('/chat')}
          >
            <Image source={{ uri: message.image }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.messageName}>{message.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <Text 
                style={[
                  styles.messageText,
                  message.unread && styles.unreadMessage
                ]}
                numberOfLines={1}
              >
                {message.message}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#333',
  },
  iconButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  messagesList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#999',
  },
  messageText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
});