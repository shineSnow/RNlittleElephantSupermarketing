/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {default as theme} from './src/color/custom-theme.json';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigator from './src/navigator/AppNavigator';
import {ApplicationProvider} from '@ui-kitten/components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <SafeAreaView>
        <AppNavigator />
      </SafeAreaView>
    </ApplicationProvider>
  );
}

export default App;
