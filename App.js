import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenView from './src/screens/ScreenView';

const navigator = createStackNavigator(
  {
    Home: ScreenView,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'houdinID'
    }
  }
);

export default createAppContainer(navigator);
