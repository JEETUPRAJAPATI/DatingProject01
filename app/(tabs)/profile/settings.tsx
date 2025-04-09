import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, ChevronRight, Crown, Palette, MapPin, Info, FileText, Shield, Trash2, Apple as Apps, Star, LogOut } from 'lucide-react-native';

const MENU_ITEMS = [
  {
    icon: Crown,
    title: 'Upgrade subscription',
    subtitle: 'Enjoy all the benefits of a premium subscription',
    color: '#FF4B6A',
    route: '/profile/subscription',
    highlight: true,
  },
  {
    icon: Palette,
    title: 'Change Theme',
    color: '#5B37B7',
    route: '/profile/theme',
  },
  {
    icon: MapPin,
    title: 'Discovery Settings',
    color: '#4CD964',
    route: '/profile/discovery',
  },
  {
    icon: Info,
    title: 'About Us',
    color: '#FF9500',
    route: '/profile/about',
  },
  {
    icon: FileText,
    title: 'Terms of Use',
    color: '#FF2D55',
    route: '/profile/terms',
  },
  {
    icon: Shield,
    title: 'Privacy Policy',
    color: '#5856D6',
    route: '/profile/privacy',
  },
  {
    icon: Trash2,
    title: 'Delete Account Instruction',
    color: '#FF3B30',
    route: '/profile/delete-account',
  },
  {
    icon: Apps,
    title: 'More App',
    color: '#007AFF',
    route: '/profile/more-apps',
  },
  {
    icon: Star,
    title: 'Rate App',
    color: '#FFCC00',
    route: 'rate',
  },
  {
    icon: LogOut,
    title: 'Logout',
    color: '#8E8E93',
    route: 'logout',
  },
];

export default function SettingsScreen() {
  const handleMenuPress = (route: string) => {
    if (route === 'logout') {
      // Handle logout
      router.replace('/auth');
    } else if (route === 'rate') {
      // Handle rate app
    } else {
      router.push(route);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              item.highlight && styles.highlightedMenuItem
            ]}
            onPress={() => handleMenuPress(item.route)}
          >
            <View style={styles.menuContent}>
              <View style={[styles.iconContainer, { backgroundColor: item.highlight ? 'white' : `${item.color}15` }]}>
                <item.icon size={20} color={item.color} />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={[
                  styles.menuTitle,
                  item.highlight && styles.highlightedText
                ]}>{item.title}</Text>
                {item.subtitle && (
                  <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                )}
              </View>
            </View>
            <ChevronRight size={20} color={item.highlight ? 'white' : '#666'} />
          </TouchableOpacity>
        ))}
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
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
  },
  highlightedMenuItem: {
    backgroundColor: '#FF4B6A',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
  },
  highlightedText: {
    color: '#fff',
  },
  menuSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});