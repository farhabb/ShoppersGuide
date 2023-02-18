import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import HelpAndSupportScreen from './src/screens/HelpAndSupportScreen';
import SendFeedbackScreen from './src/screens/SendFeedbackScreen';
import FindProductScreen from './src/screens/FindProductScreen';
import { EventRegister } from "react-native-event-listeners";
import { useEffect, useState } from 'react';
import theme from './styles/theme';
import themeContext from './styles/themeContext';


 function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect (() => {
      const listener = EventRegister.addEventListener('changeTheme', (data) => {
        setDarkMode(data)
      })
      return () => {
        EventRegister.removeAllListeners(listener)
      }
    }, [darkMode]);

    const Stack = createNativeStackNavigator();
    return (
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
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
      </themeContext.Provider>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;