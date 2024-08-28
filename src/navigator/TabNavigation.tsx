import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/home';
import SortScreen from '../pages/sort';
import CartScreen from '../pages/cart';
import RecipesScreen from '../pages/recipes';
import MyScreen from '../pages/my';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeStack = createNativeStackNavigator();
const SortStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const RecipesStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const SortStackScreen = () => {
  return (
    <SortStack.Navigator
      initialRouteName="Sort"
      screenOptions={{headerShown: false}}>
      <SortStack.Group>
        <SortStack.Screen name="Sort" component={SortScreen} />
      </SortStack.Group>
    </SortStack.Navigator>
  );
};

const CartStackScreen = () => {
  return (
    <CartStack.Navigator
      initialRouteName="Cart"
      screenOptions={{headerShown: false}}>
      <CartStack.Group>
        <CartStack.Screen name="Cart" component={CartScreen} />
      </CartStack.Group>
    </CartStack.Navigator>
  );
};
const RecipesStackScreen = () => {
  return (
    <RecipesStack.Navigator
      initialRouteName="Recipes"
      screenOptions={{headerShown: false}}>
      <RecipesStack.Group>
        <RecipesStack.Screen name="Recipes" component={RecipesScreen} />
      </RecipesStack.Group>
    </RecipesStack.Navigator>
  );
};

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Account"
      screenOptions={{headerShown: false}}>
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
    <BottomNavigationTab
      title="首页"
      icon={props => <Icon name="home" {...props} />}
    />

    <BottomNavigationTab
      title="分类"
      icon={props => <Icon name="grid-outline" {...props} />}
    />
    <BottomNavigationTab
      title="菜谱"
      icon={props => <Icon name="color-palette-outline" {...props} />}
    />
    <BottomNavigationTab
      title="购物车"
      icon={props => <Icon name="shopping-cart-outline" {...props} />}
    />
    <BottomNavigationTab
      title="我的"
      icon={props => <Icon name="person" {...props} />}
    />
  </BottomNavigation>
);

const TabNavigator = createBottomTabNavigator();

const TabNavigationScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <TabNavigator.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />

      <TabNavigator.Screen
        name="SortStackScreen"
        component={SortStackScreen}
        options={{headerShown: false}}
      />
      <TabNavigator.Screen
        name="RecipesStackScreen"
        component={RecipesStackScreen}
        options={{headerShown: false}}
      />

      <TabNavigator.Screen
        name="CartStackScreen"
        component={CartStackScreen}
        options={{headerShown: false}}
      />
      <TabNavigator.Screen
        name="AccountStackScreen"
        component={AccountStackScreen}
        options={{headerShown: false}}
      />
    </TabNavigator.Navigator>
  );
};

export default TabNavigationScreen;
