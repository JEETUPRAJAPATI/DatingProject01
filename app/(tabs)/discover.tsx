import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { useState } from 'react';

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
];

export default function DiscoverScreen() {
  const [MapView, setMapView] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);

  // Dynamically import MapView only on native platforms
  useState(() => {
    if (Platform.OS !== 'web') {
      import('react-native-maps').then((module) => {
        setMapView(() => module.default);
        setMarker(() => module.Marker);
      });
    }
  });

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <Text style={styles.webMessage}>Map view is only available on mobile devices</Text>
        <View style={styles.userGrid}>
          {USERS.map((user) => (
            <View key={user.id} style={styles.userCard}>
              <Image
                source={{ uri: user.image }}
                style={styles.userImage}
              />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userDistance}>{user.distance}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }

  if (!MapView || !Marker) {
    return (
      <View style={styles.container}>
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.7128,
          longitude: -74.0060,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {USERS.map((user) => (
          <Marker
            key={user.id}
            coordinate={user.location}
          >
            <View style={styles.markerContainer}>
              <Image
                source={{ uri: user.image }}
                style={styles.markerImage}
              />
              <View style={styles.markerInfo}>
                <Text style={styles.markerName}>{user.name}</Text>
                <Text style={styles.markerDistance}>{user.distance}</Text>
              </View>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
  },
  markerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF4B6A',
  },
  markerInfo: {
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  markerName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#333',
  },
  markerDistance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#666',
  },
  webContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  webMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  userGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#333',
  },
  userDistance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});