import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Phone, Video, Send } from 'lucide-react-native';

const MESSAGES = [
  {
    id: '1',
    text: 'Hey there! How are you?',
    time: '2:15 PM',
    sent: false,
  },
  {
    id: '2',
    text: 'I\'m good, thanks! How about you?',
    time: '2:16 PM',
    sent: true,
  },
  {
    id: '3',
    text: 'Pretty good! Would you like to grab coffee sometime?',
    time: '2:18 PM',
    sent: false,
  },
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerName}>Sarah Chen</Text>
          <Text style={styles.headerStatus}>Online</Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Phone size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Video size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {MESSAGES.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.sent ? styles.sentWrapper : styles.receivedWrapper,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                message.sent ? styles.sentBubble : styles.receivedBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.sent ? styles.sentText : styles.receivedText,
                ]}
              >
                {message.text}
              </Text>
              <Text
                style={[
                  styles.messageTime,
                  message.sent ? styles.sentTime : styles.receivedTime,
                ]}
              >
                {message.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  headerName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  headerStatus: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#4CD964',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 15,
  },
  headerButton: {
    padding: 8,
  },
  messagesContainer: {
    flex: 1,
    padding: 20,
  },
  messageWrapper: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  sentWrapper: {
    justifyContent: 'flex-end',
  },
  receivedWrapper: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
  },
  sentBubble: {
    backgroundColor: '#FF4B6A',
    borderBottomRightRadius: 5,
  },
  receivedBubble: {
    backgroundColor: '#f5f5f5',
    borderBottomLeftRadius: 5,
  },
  messageText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  sentText: {
    color: '#fff',
  },
  receivedText: {
    color: '#333',
  },
  messageTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  sentTime: {
    color: 'rgba(255,255,255,0.7)',
  },
  receivedTime: {
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#FF4B6A',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});