import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OrderHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <Text>14 May 2025 - $8.99</Text>
      <Text>16 May 2025 - $12.49</Text>
      <Button title="Download History" onPress={() => alert('Download started')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
});
