import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login'
import Home from '../screens/home';
import Pagamento from '../screens/Pagamento';
import Parabens from '../screens/Parabens';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false}}
      />

      <Stack.Screen
        name="Pagamento"
        component={Pagamento}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Parabens"
        component={Parabens}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}
