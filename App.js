import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Credits from './src/screens/Credits';
import Rules from './src/screens/Rules';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Credits' component={Credits} />
        <Stack.Screen name='Rules' component={Rules} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
