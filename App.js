import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './BPlusMobileFrontend/screens/HomeScreen';
import ModulesScreen from './BPlusMobileFrontend/screens/ModulesScreen';
import HabitTrackerScreen from './BPlusMobileFrontend/screens/HabitTrackerScreen';
import ShopScreen from './BPlusMobileFrontend/screens/ShopScreen';
import InventoryScreen from './BPlusMobileFrontend/screens/InventoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Modules" component={ModulesScreen} />
      <Tab.Screen name="Habits" component={HabitTrackerScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

