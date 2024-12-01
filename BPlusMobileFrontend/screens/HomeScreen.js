import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.petContainer}>
        <Image
          source={require('../assets/rocky-default.png')}
          style={styles.petImage}
        />
      </View>
      <Text style={styles.coinText}>RockyCoins: 100</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  petContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E1E8ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  petImage: {
    width: 150,
    height: 150,
  },
  coinText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

