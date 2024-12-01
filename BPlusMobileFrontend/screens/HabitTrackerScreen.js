import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const habits = [
  { id: '1', title: 'Morning Meditation', completed: false },
  { id: '2', title: 'Read for 30 minutes', completed: true },
  { id: '3', title: 'Exercise', completed: false },
  { id: '4', title: 'Drink 8 glasses of water', completed: false },
];

export default function HabitTrackerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Habits</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <View style={styles.habitItem}>
            <Text style={styles.habitTitle}>{item.title}</Text>
            <Text style={[styles.habitStatus, item.completed ? styles.completed : styles.incomplete]}>
              {item.completed ? 'Completed' : 'Incomplete'}
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
  habitItem: {
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
  habitTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  habitStatus: {
    fontSize: 14,
    fontWeight: '500',
  },
  completed: {
    color: '#4CAF50',
  },
  incomplete: {
    color: '#F44336',
  },
});

