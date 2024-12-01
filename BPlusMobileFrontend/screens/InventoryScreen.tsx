import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const inventoryItems = [
  { id: '1', title: 'Cool Sunglasses', equipped: true },
  { id: '2', title: 'Fancy Hat', equipped: false },
  { id: '3', title: 'Stylish Scarf', equipped: false },
];

export function InventoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rocky's Inventory</Text>
      <FlatList
        data={inventoryItems}
        renderItem={({ item }) => (
          <View style={styles.inventoryItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={[styles.itemStatus, item.equipped ? styles.equipped : styles.unequipped]}>
              {item.equipped ? 'Equipped' : 'Unequipped'}
            </Text>
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
  inventoryItem: {
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
  itemStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  equipped: {
    color: '#4CAF50',
  },
  unequipped: {
    color: '#F44336',
  },
});

