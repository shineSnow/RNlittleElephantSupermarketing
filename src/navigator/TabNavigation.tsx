import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import MyScreen from '../pages/my';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import React from 'react';

const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: true}}>
      <AccountStack.Group>
        <AccountStack.Screen name="Account" component={MyScreen} />
      </AccountStack.Group>
    </AccountStack.Navigator>
  );
};

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    appearance="noIndicator"
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Account" />
  </BottomNavigation>
);

const TabNavigator = createBottomTabNavigator();

const TabNavigationScreen = () => {
  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <TabNavigator.Screen
        name="AccountStackScreen"
        component={AccountStackScreen}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigationScreen;
