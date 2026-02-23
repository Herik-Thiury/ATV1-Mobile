import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroUsuario({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSalvar() {
    alert('Usuário cadastrado com sucesso!');
    navigation.goBack(); 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Ionicons name="person-add-outline" size={100} color="black" style={styles.icon} />
      <Text style={styles.label}>nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>cpf</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <Text style={styles.label}>email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} 
      />
      <TouchableOpacity style={styles.buttonSalvar} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#F5F5ED',
    paddingBottom: 40, 
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: '#FFF',
    height: 45,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonSalvar: {
    backgroundColor: '#1E90FF', 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});