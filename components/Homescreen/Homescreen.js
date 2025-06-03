import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const beans = [
  'Arabica', 
  'Robusta', 
  'Liberica', 
  'Excelsa',
  'Blue Mountain',
  'Ethiopian Yirgacheffe',
  'Colombian Supremo',
  'Hawaiian Kona',
  'Guatemalan Antigua',
  'Brazilian Santos'
];

const drinks = [
  'Espresso', 
  'Cappuccino', 
  'Latte',
  'Americano',
  'Macchiato',
  'Mocha',
  'Frappuccino',
  'Cold Brew',
  'Iced Coffee',
  'Turkish Coffee',
  'French Press',
  'Affogato',
  'Cortado',
  'Flat White',
  'Irish Coffee'
];

export default function HomeScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { name: item }]);
  };

  const addToFavorites = (item) => {
    setFavoriteItems((prev) => [...prev, { name: item }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Choose your Coffee & Beans!</Text>

      {/* NAVIGATION BUTTONS */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Cart', { cartItems })}>
          <Text style={styles.navBtnText}>🛒 Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Favorites', { favoriteItems })}>
          <Text style={styles.navBtnText}>❤️ Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Payment')}>
          <Text style={styles.navBtnText}>💳 Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('OrderHistory')}>
          <Text style={styles.navBtnText}>📜 Orders</Text>
        </TouchableOpacity>
      </View>

      {/* BEANS */}
      <Text style={styles.sectionTitle}>🫘 Premium Coffee Beans</Text>
      {beans.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: '#4caf50' }]}>
          <Text style={styles.itemName}>{item}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
              <Text style={styles.btnText}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favBtn} onPress={() => addToFavorites(item)}>
              <Text style={styles.btnText}>❤️ FAVORITE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* DRINKS */}
      <Text style={styles.sectionTitle}>☕ Specialty Coffee Drinks</Text>
      {drinks.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: '#8b0000' }]}>
          <Text style={styles.itemName}>{item}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
              <Text style={styles.btnText}>ADD TO CART</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favBtn} onPress={() => addToFavorites(item)}>
              <Text style={styles.btnText}>❤️ FAVORITE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#3e2723' }, // Dark brown background
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: 'white' },

  navButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navBtn: {
    backgroundColor: '#222831',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 5,
    width: '48%',
  },
  navBtnText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },

  sectionTitle: { fontSize: 22, marginVertical: 10, fontWeight: 'bold', color: 'white' },
  card: {
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  cartBtn: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 },
  favBtn: { backgroundColor: '#ff5733', padding: 10, borderRadius: 5 },
  btnText: { color: 'white', fontWeight: 'bold' },
});