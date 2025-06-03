import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CartScreen({ route, navigation }) {
  const { cartItems = [] } = route.params || {};
  const [size, setSize] = useState('medium');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text>No items in cart.</Text>
      ) : (
        cartItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>Choose size:</Text>
            <Picker
              selectedValue={size}
              onValueChange={(value) => setSize(value)}
              style={styles.picker}
            >
              <Picker.Item label="Small (100g)" value="small" />
              <Picker.Item label="Medium (200g)" value="medium" />
              <Picker.Item label="Large (300g)" value="large" />
            </Picker>
          </View>
        ))
      )}

      {cartItems.length > 0 && (
        <Button title="Pay" onPress={() => navigation.navigate('Payment')} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  item: {
    marginBottom: 24,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  itemName: { fontSize: 18, marginBottom: 8 },
  picker: { height: 50, width: '100%', marginBottom: 10 },
});
