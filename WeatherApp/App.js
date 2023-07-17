import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyC8oxp4SeRw2hxD6VaNwjBbLngYauxAXeA",
  authDomain: "sanboxapp-8654d.firebaseapp.com",
  projectId: "sanboxapp-8654d",
  storageBucket: "sanboxapp-8654d.appspot.com",
  messagingSenderId: "521314368265",
  appId: "1:521314368265:web:443b0f730e7c580d97b1d8",
  measurementId: "G-C4DE0ENL5V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const HomeScreen = ({navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> 
    </View>  
  );
};

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
