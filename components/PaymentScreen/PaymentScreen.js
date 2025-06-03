import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PaymentScreen({ navigation }) {
  const handlePayment = () => {
   
    navigation.navigate('OrderHistory');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>
      <Button title="Wallet" onPress={handlePayment} />
      <Button title="Google Pay" onPress={handlePayment} />
      <Button title="Apple Pay" onPress={handlePayment} />
      <Button title="Amazon Pay" onPress={handlePayment} />
      <Button title="Credit Card" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  title: { fontSize: 24, marginBottom: 20 },
});
