import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Search, Settings } from 'lucide-react-native';

const MATCHES = [
  {
    id: '1',
    name: 'Alexandra',
    age: 23,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    online: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Jessica',
    age: 23,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60',
    online: false,
    featured: true,
  },
  {
    id: '3',
    name: 'Sarah',
    age: 23,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
    online: true,
    featured: false,
  },
  {
    id: '4',
    name: 'Emily',
    age: 23,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60',
    online: false,
    featured: false,
  },
  {
    id: '5',
    name: 'Rachel',
    age: 23,
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60',
    online: true,
    featured: false,
  },
];

const tabs = ['All', 'Featured', 'Liked', 'Online'];

export default function MatchesScreen() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Matches</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Settings size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.matchesGrid}>
        {MATCHES.map((match) => (
          <TouchableOpacity key={match.id} style={styles.matchCard}>
            <Image source={{ uri: match.image }} style={styles.matchImage} />
            <View style={styles.matchInfo}>
              <Text style={styles.matchName}>{match.name}, {match.age}</Text>
              {match.online && <View style={styles.onlineIndicator} />}
            </View>
            {match.featured && (
              <View style={styles.featuredBadge}>
                <Text style={styles.featuredText}>Featured</Text>
              </View>
            )}
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
  headerActions: {
    flexDirection: 'row',
    gap: 15,
  },
  iconButton: {
    padding: 8,
  },
  tabsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  activeTab: {
    backgroundColor: '#FF4B6A',
  },
  tabText: {
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  matchesGrid: {
    padding: 20,
  },
  matchCard: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  matchImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  matchInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  matchName: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    fontSize: 16,
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CD964',
  },
  featuredBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#FF4B6A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  featuredText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
});