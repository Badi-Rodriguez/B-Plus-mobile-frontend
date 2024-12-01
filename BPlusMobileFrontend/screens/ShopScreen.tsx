import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const shopItems = [
  { id: '1', title: 'Cool Sunglasses', price: 50 },
  { id: '2', title: 'Fancy Hat', price: 75 },
  { id: '3', title: 'Stylish Scarf', price: 30 },
  { id: '4', title: 'Cozy Sweater', price: 100 },
];

export function ShopScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rocky's Shop</Text>
      <FlatList
        data={shopItems}
        renderItem={({ item }) => (
          <View style={styles.shopItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price} RockyCoins</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  shopItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
  buyButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

