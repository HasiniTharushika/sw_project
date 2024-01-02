import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigation';
import {LoginScreen} from '../screens/login/LoginScreen.tsx';
import {SampleScreen} from '../screens/Sample/SampleScreen.tsx';
import {Colors} from '../utils/Colors.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.Primary,
          },
          headerShadowVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          statusBarColor: Colors.Primary,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Sample"
          component={SampleScreen}
          options={{title: 'Sample'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
