import {NavigationContainer} from '@react-navigation/native';
import TabNavigationScreen from './TabNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

const AppNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <TabNavigationScreen />
      <View style={{height: insets.bottom}}></View>
    </NavigationContainer>
  );
};

export default AppNavigator;
