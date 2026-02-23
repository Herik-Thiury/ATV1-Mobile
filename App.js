import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importando as telas que criamos
import Login from "./src/screens/Login";
import CadastroUsuario from "./src/screens/CadastroUsuario";
import ListaContatos from "./src/screens/ListaContatos";
import CadastroContato from "./src/screens/CadastroContato";
import AlteracaoExclusao from "./src/screens/AlteracaoExclusao";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
          options={{
            title: "Cadastro de Usuários",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ListaContatos"
          component={ListaContatos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroContato"
          component={CadastroContato}
          options={{ title: "Cadastro de Contato", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="AlteracaoExclusao"
          component={AlteracaoExclusao}
          options={{ title: "Alteração/Exclusão", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
