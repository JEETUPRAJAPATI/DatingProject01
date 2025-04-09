import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Camera, Image as ImageIcon, Trash2 } from 'lucide-react-native';
import { useState } from 'react';

export default function EditProfileScreen() {
  const [name, setName] = useState('Cristiano');
  const [bio, setBio] = useState('I love music, traveling, swimming, playing live, traveling the world to find joy!');
  const [location, setLocation] = useState('Chicago, United States');

  const handleSave = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.photoSection}>
          <Text style={styles.sectionTitle}>Profile Photo</Text>
          <View style={styles.photoActions}>
            <TouchableOpacity style={styles.photoAction}>
              <View style={styles.actionIcon}>
                <Camera size={24} color="#FF4B6A" />
              </View>
              <Text style={styles.actionText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoAction}>
              <View style={styles.actionIcon}>
                <ImageIcon size={24} color="#FF4B6A" />
              </View>
              <Text style={styles.actionText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoAction}>
              <View style={styles.actionIcon}>
                <Trash2 size={24} color="#FF4B6A" />
              </View>
              <Text style={styles.actionText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Enter your location"
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>About Me</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            placeholder="Write something about yourself"
            multiline
            numberOfLines={4}
          />
        </View>
      </View>
    </ScrollView>
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
    fontSize: 20,
    color: '#333',
  },
  saveButton: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FF4B6A',
  },
  content: {
    padding: 20,
  },
  photoSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
  },
  photoActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  photoAction: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFE5EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  inputSection: {
    marginBottom: 24,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  bioInput: {
    height: 120,
    textAlignVertical: 'top',
  },
});