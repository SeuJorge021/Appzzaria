import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroUsuario from '../screens/CadastroUsuario/CadastroUsuario';

import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {

  return (
    <Stack.Navigator>

      <Stack.Screen
    name="CadastroUsuario"
    component={CadastroUsuario}
  />

      <Stack.Screen
        name="Login"
        component={Login}
      />

    </Stack.Navigator>

  );

}