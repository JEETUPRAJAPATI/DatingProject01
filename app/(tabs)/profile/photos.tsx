import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';

const PHOTOS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60',
];

export default function PhotosScreen() {
  const [selectedPhoto, setSelectedPhoto] = useState(PHOTOS[0]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainPhotoContainer}>
        <Image source={{ uri: selectedPhoto }} style={styles.mainPhoto} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.thumbnailScroll}>
        {PHOTOS.map((photo, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.thumbnailContainer,
              selectedPhoto === photo && styles.selectedThumbnail
            ]}
            onPress={() => setSelectedPhoto(photo)}
          >
            <Image source={{ uri: photo }} style={styles.thumbnail} />
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  mainPhotoContainer: {
    flex: 1,
    padding: 20,
  },
  mainPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  thumbnailScroll: {
    padding: 20,
  },
  thumbnailContainer: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedThumbnail: {
    borderColor: '#FF4B6A',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});