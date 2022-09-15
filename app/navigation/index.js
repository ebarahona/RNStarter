import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen} from '@screens';
import {AuthProvider} from '@context';
import {useAuth} from '@hooks';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName={'Login'}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator initialRouteName={'Welcome'}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const {loggedIn} = useAuth();
  return (
    <Stack.Navigator
      initialRouteName={'Auth'}
      screenOptions={{
        presentation: 'modal',
      }}>
      {loggedIn ? (
        <Stack.Screen name="Home" component={HomeStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
