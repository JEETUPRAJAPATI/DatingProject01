import { View, Text, StyleSheet, Image, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MapPin } from 'lucide-react-native';

const USERS = [
  {
    id: '1',
    name: 'Sarah',
    age: 24,
    distance: '1.2 km',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
  },
  {
    id: '2',
    name: 'Emily',
    age: 26,
    distance: '2.5 km',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    location: {
      latitude: 40.7148,
      longitude: -74.0068,
    },
  },
  {
    id: '3',
    name: 'Jessica',
    age: 28,
    distance: '3.0 km',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
    location: {
      latitude: 40.7138,
      longitude: -74.0048,
    },
  },
];

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.locationHeader}>
          <MapPin size={20} color="#FF4B6A" />
          <Text style={styles.locationText}>New York City</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userGrid}>
          {USERS.map((user) => (
            <TouchableOpacity key={user.id} style={styles.userCard}>
              <Image source={{ uri: user.image }} style={styles.userImage} />
              <View style={styles.userInfo}>
                <View style={styles.userHeader}>
                  <Text style={styles.userName}>{user.name}, {user.age}</Text>
                </View>
                <View style={styles.userDistance}>
                  <MapPin size={16} color="#666" />
                  <Text style={styles.distanceText}>{user.distance}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  userGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  userCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  userImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  userInfo: {
    padding: 12,
  },
  userHeader: {
    marginBottom: 8,
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  userDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distanceText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
});