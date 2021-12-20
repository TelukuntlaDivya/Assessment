import * as React from 'react';
import { View, Text,Dimensions, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OtpScreen from './Screens/welcome';
import ButtonsScreen from './Screens/buttons';
import DetectDevice from './Screens/detectDevice';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render(){
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Otp'
      >
        <Stack.Screen name="Otp" component={OtpScreen} options={{ title: "", 
          headerStyle: {
            elevation: 0,
            backgroundColor: '#000'
          },headerTintColor: '#fff',}}
        />
        <Stack.Screen name="ButtonsScreen" component={ButtonsScreen}     
          options={({ route }) => ({ 
            title: "", 
            headerStyle: {
              elevation: 0,
              backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Text style={{color:'#fff', paddingRight: '10%', fontWeight:'bold'}}>{route.params.name}</Text>
            )
          })}
        />
        <Stack.Screen name="DetectDevice" component={DetectDevice}     
          options={({ route }) => ({ 
            title: "", 
            headerStyle: {
              elevation: 0,
              backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Text style={{color:'#fff', paddingRight: '10%', fontWeight:'bold'}}>{route.params.name}</Text>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

export default App;