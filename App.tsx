import 'react-native-gesture-handler';  // Import this at the very top
import React from 'react';
import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import { HomeScreen } from './BPlusMobileFrontend/screens/HomeScreen';
import { ModulesScreen } from './BPlusMobileFrontend/screens/ModulesScreen';
import { HabitTrackerScreen } from './BPlusMobileFrontend/screens/HabitTrackerScreen';
import { ShopScreen } from './BPlusMobileFrontend/screens/ShopScreen';
import { InventoryScreen } from './BPlusMobileFrontend/screens/InventoryScreen';

// Create tab and stack navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Main Tabs (Bottom Tab Navigator)
function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,  // Hide header for all tabs
                tabBarActiveTintColor: 'tomato',  // Customize active tab icon color
                tabBarInactiveTintColor: 'gray',  // Customize inactive tab icon color
                tabBarStyle: { backgroundColor: '#fff' },  // Customize tab bar style
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Modules" component={ModulesScreen} />
            <Tab.Screen name="Habits" component={HabitTrackerScreen} />
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Inventory" component={InventoryScreen} />
        </Tab.Navigator>
    );
}

// Main App Component (Stack Navigator)
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainTabs}
                    options={{ headerShown: false }} // Hide header for the main screen
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

