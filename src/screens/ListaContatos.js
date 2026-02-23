import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const contatosIniciais = [
  { id: '1', nome: 'Marcos Andrade', telefone: '81 988553424' },
  { id: '2', nome: 'Patrícia Tavares', telefone: '81 998765332' },
  { id: '3', nome: 'Rodrigo Antunes', telefone: '81 987765525' },
];

export default function ListaContatos({ navigation }) {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('AlteracaoExclusao')}
    >
      <View style={styles.cardContent}>
        <Ionicons name="person-circle-outline" size={40} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.telefone}>{item.telefone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>LISTA DE CONTATOS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CadastroContato')}>
          <Ionicons name="add-circle" size={32} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={contatosIniciais}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5ED',
    paddingTop: 50, 
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  telefone: {
    fontSize: 16,
    color: '#555',
  },
});