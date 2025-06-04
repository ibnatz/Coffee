import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

const beans = [
  { name: 'Arabica', image: 'https://i.ibb.co/pB5MdwVC/what-are-arabica-beans-1080x.webp' },
  { name: 'Robusta', image: 'https://i.ibb.co/F4CYZzs9/Robusta-Coffee-Quality.webp' },
  { name: 'Liberica', image: 'https://i.ibb.co/FLpsCdvf/liberica.jpg' },
  { name: 'Excelsa', image: 'https://i.ibb.co/7NRgJB9F/Excelsa-Coffee-4.webp' },
  { name: 'Blue Mountain', image: 'https://i.ibb.co/rKcFWTy3/blue-mountain-coffee-jamaican-blue-mountain-coffee-jamaican-coffee-blue-mountain-coffee-beans.jpg' },
  { name: 'Ethiopian Yirgacheffe', image: 'https://i.ibb.co/nM1zX8hm/ethipian.jpg' },
  { name: 'Colombian Supremo', image: 'https://i.ibb.co/HTDbf9Rg/colombian.jpg' },
  { name: 'Hawaiian Kona', image: 'https://i.ibb.co/tTpW3QVw/Hawaiian-Kona.webp' },
  { name: 'Guatemalan Antigua', image: 'https://i.ibb.co/351N7DFt/guatemalaantigua-coffee-beans.jpg' },
  { name: 'Brazilian Santos', image: 'https://i.ibb.co/Zp9JRPgg/brazilian-santos.jpg' }
];

const drinks = [
  { name: 'Espresso', image: 'https://i.ibb.co/S70726XN/espresso.jpg' },
  { name: 'Cappuccino', image: 'https://i.ibb.co/S4ttgpnV/Cappuccino-exc.webp' },
  { name: 'Latte', image: 'https://i.ibb.co/6cSH3SQX/latte-small.jpg' },
  { name: 'Americano', image: 'https://i.ibb.co/V49qgsx/americano-b74a8154-454b-4f74-9a6c-95fbc4152ed3.webp' },
  { name: 'Macchiato', image: 'https://i.ibb.co/4gF3JGWG/Macchiato-7199366530.jpg' },
  { name: 'Mocha', image: 'https://i.ibb.co/fdp3fQ3h/the-perfect-mocha-coffee-29100-16x9.jpg' },
  { name: 'Cold Brew', image: 'https://i.ibb.co/rfmHJmKg/cold-brew.jpg' },
  { name: 'Turkish Coffee', image: 'https://i.ibb.co/S4b3nYQH/Traditional-Turkish-Coffee-11.jpg' },
  { name: 'Affogato', image: 'https://i.ibb.co/Kpjrzkc3/Italian-Affogato-Feature.jpg' }
];

export default function HomeScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const addToFavorites = (item) => {
    setFavoriteItems((prev) => [...prev, item]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Daily Dose of Coffee!</Text>

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

      {/* BEANS SECTION */}
      <Text style={styles.sectionTitle}>Premium Coffee Beans 🫘</Text>
      {beans.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: '#5d4037' }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favBtn} onPress={() => addToFavorites(item)}>
              <Text style={styles.btnText}>❤️ Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* DRINKS SECTION */}
      <Text style={styles.sectionTitle}>Specialty Coffee Drinks ☕</Text>
      {drinks.map((item, index) => (
        <View key={index} style={[styles.card, { backgroundColor: '#3e2723' }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cartBtn} onPress={() => addToCart(item)}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favBtn} onPress={() => addToFavorites(item)}>
              <Text style={styles.btnText}>❤️ Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#2c1b14',
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f5f5f5',
    textAlign: 'center',
    marginBottom: 24,
  },
  navButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  navBtn: {
    backgroundColor: '#6d4c41',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 6,
    width: '48%',
    elevation: 3,
  },
  navBtnText: {
    color: '#fffde7',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffe0b2',
    marginVertical: 12,
    textAlign: 'center',
  },
  card: {
    borderRadius: 14,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 12,
    marginBottom: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fffde7',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartBtn: {
    backgroundColor: '#4e342e',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 6,
  },
  favBtn: {
    backgroundColor: '#d84315',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 6,
  },
  btnText: {
    color: '#fffde7',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },
});