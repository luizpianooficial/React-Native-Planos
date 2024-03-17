import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const PlanoCard = ({ titulo, descricao, preco, vantagens, id   }) => {
  const navigation = useNavigation();

  const handleEscolherPlano = () => {
  
    navigation.navigate('Pagamento', { titulo, descricao, preco, vantagens,id   });
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.preco}>R${preco}0</Text>
        {/* <Text style={styles.preco}>{id}</Text> */}

        <Text style={styles.vantagensTitle}>Incluso:</Text>
        <View style={styles.vantagensContainer}>
          <Text style={styles.descricao}>{descricao}</Text>
          {vantagens.map((vantagem, index) => (
            <View key={index} style={styles.vantagemItem}>
              <Image source={require('../../assets/Vector.png')} style={styles.marcador} />
              <Text style={styles.vantagemText}>{vantagem}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.buttonPlano} onPress={handleEscolherPlano}>
            <Text style={styles.buttonPlanoText}>Escolher Plano</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 8,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  preco: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 30,
    color: '#3BBDED',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  vantagensTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vantagensContainer: {
    marginLeft: 16,
  },
  vantagemItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  marcador: {
    width: 20,
    height: 16,
    marginRight: 8,
  },
  vantagemText: {
    marginLeft: 4,
  },
  descricao: {
    marginBottom: 10
  },
  buttonPlano: {
    backgroundColor: '#3BBDED',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonPlanoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default PlanoCard;
