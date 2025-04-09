import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="photos" />
      <Stack.Screen name="subscription" />
      <Stack.Screen name="theme" />
      <Stack.Screen name="discovery" />
      <Stack.Screen name="about" />
      <Stack.Screen name="terms" />
      <Stack.Screen name="privacy" />
      <Stack.Screen name="delete-account" />
      <Stack.Screen name="more-apps" />
    </Stack>
  );
}