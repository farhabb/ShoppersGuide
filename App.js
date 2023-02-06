import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import HelpAndSupportScreen from './src/screens/HelpAndSupportScreen';
import SendFeedbackScreen from './src/screens/SendFeedbackScreen';
import FindProductScreen from './src/screens/FindProductScreen';

  function App() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <StatusBar barStyle="auto"/>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{ title: "Find your product"}}
            />
            <Stack.Screen
            name={'FindProduct'}
            component={FindProductScreen}
            options={{ title: "Find your Product" }} 
            />
            <Stack.Screen
            name={'Settings'}
            component={SettingsScreen}
            options={{ title: "Settings" }} 
            />
            <Stack.Screen
            name={'Accessibility'}
            component={AccessibilityScreen}
            options={{ title: "Accessibility Settings" }} 
            />
            <Stack.Screen
            name={'HelpandSupport'}
            component={HelpAndSupportScreen}
            options={{ title: "Help and Support" }} 
            />
            <Stack.Screen
            name={'SendFeedback'}
            component={SendFeedbackScreen}
            options={{ title: "Send Feedback" }} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;