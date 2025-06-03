import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FavoritesScreen({ route }) {
  const { favoriteItems = [] } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {favoriteItems.length === 0 ? (
        <Text>No favorites yet.</Text>
      ) : (
        favoriteItems.map((item, index) => (
          <Text key={index} style={styles.item}>❤️ {item.name}</Text>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  item: { fontSize: 18, marginBottom: 10 },
});
