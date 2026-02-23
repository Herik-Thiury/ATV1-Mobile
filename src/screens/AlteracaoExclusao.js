import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AlteracaoExclusao({ navigation }) {
  const [nome, setNome] = useState('Marco Andrade');
  const [email, setEmail] = useState('mand@gmail.com');
  const [telefone, setTelefone] = useState('81 988553424');

  function handleAlterar() {
    Alert.alert('Sucesso', 'Contato alterado com sucesso!');
    navigation.goBack();
  }

  function handleExcluir() {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este contato?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Excluir', 
          style: 'destructive',
          onPress: () => {
            Alert.alert('Excluído', 'Contato removido com sucesso!');
            navigation.goBack();
          }
        },
      ]
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="person-circle-outline" size={100} color="black" style={styles.icon} />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.buttonAlterar} onPress={handleAlterar}>
        <Text style={styles.buttonText}>Alterar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonExcluir} onPress={handleExcluir}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
    backgroundColor: '#F5F5ED',
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
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
  buttonAlterar: {
    backgroundColor: '#1E90FF', 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonExcluir: {
    backgroundColor: '#FF0000', 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});