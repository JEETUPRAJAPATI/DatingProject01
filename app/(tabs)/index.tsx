import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { X, Heart, Star, Filter } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const DUMMY_PROFILES = [
  {
    id: '1',
    name: 'Alexa Gonzalez',
    age: 23,
    occupation: 'Professional model',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    distance: '2 miles away'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    age: 25,
    occupation: 'Photographer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    distance: '5 miles away'
  }
];

export default function HomeScreen() {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    distance: 25,
    ageRange: [18, 35],
    gender: 'female'
  });

  const handleLike = () => {
    if (currentProfile < DUMMY_PROFILES.length - 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  const handleDislike = () => {
    if (currentProfile < DUMMY_PROFILES.length - 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  const handleSuperLike = () => {
    if (currentProfile < DUMMY_PROFILES.length - 1) {
      setCurrentProfile(currentProfile + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>DATINGLUV</Text>
        <TouchableOpacity onPress={() => setShowFilters(true)}>
          <Filter size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        {DUMMY_PROFILES.map((profile, index) => (
          index === currentProfile && (
            <Animated.View 
              key={profile.id} 
              entering={FadeIn}
              style={styles.card}
            >
              <Image source={{ uri: profile.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                <Text style={styles.occupation}>{profile.occupation}</Text>
                <Text style={styles.distance}>{profile.distance}</Text>
              </View>
            </Animated.View>
          )
        ))}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionButton, styles.dislike]} onPress={handleDislike}>
          <X size={24} color="#FF4B6A" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.superLike]} onPress={handleSuperLike}>
          <Star size={24} color="#5B37B7" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.like]} onPress={handleLike}>
          <Heart size={24} color="#4CD964" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={showFilters}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filters</Text>
              <TouchableOpacity onPress={() => setShowFilters(false)}>
                <X size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <Text style={styles.filterLabel}>Location</Text>
            <TouchableOpacity style={styles.locationInput}>
              <Text style={styles.locationText}>New York City</Text>
              <Filter size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.filterLabel}>Gender</Text>
            <View style={styles.genderButtons}>
              <TouchableOpacity 
                style={[
                  styles.genderButton,
                  filters.gender === 'female' && styles.genderButtonActive
                ]}
                onPress={() => setFilters({ ...filters, gender: 'female' })}
              >
                <Text style={[
                  styles.genderButtonText,
                  filters.gender === 'female' && styles.genderButtonTextActive
                ]}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.genderButton,
                  filters.gender === 'male' && styles.genderButtonActive
                ]}
                onPress={() => setFilters({ ...filters, gender: 'male' })}
              >
                <Text style={[
                  styles.genderButtonText,
                  filters.gender === 'male' && styles.genderButtonTextActive
                ]}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.genderButton,
                  filters.gender === 'other' && styles.genderButtonActive
                ]}
                onPress={() => setFilters({ ...filters, gender: 'other' })}
              >
                <Text style={[
                  styles.genderButtonText,
                  filters.gender === 'other' && styles.genderButtonTextActive
                ]}>Others</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={styles.resetButton}
                onPress={() => {
                  setFilters({
                    distance: 25,
                    ageRange: [18, 35],
                    gender: 'female'
                  });
                }}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.applyButton}
                onPress={() => setShowFilters(false)}
              >
                <Text style={styles.applyButtonText}>Apply Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  logo: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#FF4B6A',
  },
  cardContainer: {
    flex: 1,
    padding: 20,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 4,
  },
  occupation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  distance: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  actionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dislike: {
    borderWidth: 2,
    borderColor: '#FF4B6A',
  },
  superLike: {
    borderWidth: 2,
    borderColor: '#5B37B7',
  },
  like: {
    borderWidth: 2,
    borderColor: '#4CD964',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333',
  },
  filterLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  locationInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 20,
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  genderButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
  },
  genderButtonActive: {
    backgroundColor: '#FFE5EA',
  },
  genderButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666',
  },
  genderButtonTextActive: {
    color: '#FF4B6A',
    fontFamily: 'Poppins-SemiBold',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  resetButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666',
  },
  applyButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FF4B6A',
    borderRadius: 12,
    alignItems: 'center',
  },
  applyButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});