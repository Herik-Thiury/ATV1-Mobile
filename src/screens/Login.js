import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    navigation.navigate("ListaContatos");
  }

  function handleCadastro() {
    navigation.navigate("CadastroUsuario");
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="person-circle-outline"
        size={120}
        color="black"
        style={styles.icon}
      />

      <Text style={styles.label}>login</Text>
      <TextInput style={styles.input} value={login} onChangeText={setLogin} />

      <Text style={styles.label}>senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastro} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    backgroundColor: "#F5F5ED",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: "#000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#A9A9A9",
    backgroundColor: "#FFF",
    height: 45,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonLogin: {
    backgroundColor: "#1E90FF", 
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  buttonCadastro: {
    backgroundColor: "#FF0000", 
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
