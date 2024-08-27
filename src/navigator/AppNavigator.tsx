import {NavigationContainer} from '@react-navigation/native';
import TabNavigationScreen from './TabNavigation';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigationScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
