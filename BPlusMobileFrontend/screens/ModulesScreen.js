import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const modules = [
  { id: '1', title: 'Stress Management' },
  { id: '2', title: 'Time Management' },
  { id: '3', title: 'Goal Setting' },
  { id: '4', title: 'Mindfulness' },
  { id: '5', title: 'Positive Thinking' },
];

export default function ModulesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Self-Improvement Modules</Text>
      <FlatList
        data={modules}
        renderItem={({ item }) => (
          <View style={styles.moduleItem}>
            <Text style={styles.moduleTitle}>{item.title}</Text>
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
  moduleItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

