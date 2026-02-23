import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroContato({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleSalvar() {
    alert('Contato salvo com sucesso!');
    navigation.goBack(); 
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="person-add" size={100} color="black" style={styles.icon} />

      {/* Input Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do contato"
      />

      {/* Input Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Input Telefone */}
      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Ex: 81 99999-9999"
        keyboardType="phone-pad" 
      />

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.buttonSalvar} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
    backgroundColor: '#F5F5ED',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 30,
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
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonSalvar: {
    backgroundColor: '#1E90FF', 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});