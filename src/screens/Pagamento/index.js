import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller, getValues } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Pagamento = ({ route }) => {
  const { titulo, descricao, preco, vantagens, id } = route.params;
  const { control, handleSubmit, formState: { errors } } = useForm(); 
  const navigation = useNavigation();
  const [showAnimation, setShowAnimation] = useState(false);

  const ValidarPlano = async (formData) => {
    setShowAnimation(true);
  
    try {
      const { email } = formData; 
  
      console.log("Email:", email);
      console.log("ID do Plano:", route.params.id);
  
      const response = await axios.post('https://develop.egssistemas.com.br/EGSWEB/api/TesteDesenvolvimentoApi/SalvarPlanoUsuario', {
        IDPLANO: route.params.id,
        EMAIL: email,
      });
  
      if (response.status === 200) {
        
        setTimeout(() => {
          navigation.navigate('Parabens');
        }, 2000);
      } else {
        console.error('Erro ao validar o plano');
      }
      
    } catch (error) {
      console.error('Erro ao validar o plano:', error);
    }
  };
  

  return (
    <View style={styles.cardMain}>
      <View>
        <Image source={require('../../assets/Header.png')} />
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.vantagensTitle}>Incluso:</Text>
        <View style={styles.vantagensContainer}>
          <Text style={styles.descricao}>{descricao}</Text>
          <Text>Vantagens:</Text>
          <View>
            {vantagens.map((vantagem, index) => (
              <View key={index} style={styles.vantagemItem}>
                <Image source={require('../../assets/Vector.png')} style={styles.marcador} />
                <Text style={styles.vantagemText}>{vantagem}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.cardEmail}>
          <Text style={styles.title}>Email</Text>
          <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder='email@email.com'
              style={styles.input}
              onChangeText={onChange}
              value={value}
            />
          )}
        />



        <Text style={styles.ValorTotal}>Valor Total:</Text>
        <Text style={styles.preco}>R${preco}0</Text>

        <TouchableOpacity style={styles.CardValidarPlano} onPress={handleSubmit(ValidarPlano)}>
  <Text style={styles.ValidarPlano}>Validar plano</Text>
</TouchableOpacity>


{showAnimation && (
  <LottieView
    source={require('../../assets/check.json')}
    autoPlay={true}
    loop={false}
    autoSize={true}
    style={styles.lottie}
  />
)}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    marginTop: 50,
    width: 350,
    margin:30,
  },
  cardMain:{
    // backgroundColor: 'red',
    flex:1,
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
    fontSize: 25,
    color: '#3BBDED',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop:-25,
    margin:40
    
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
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    width: '80%',
    marginBottom: 20,
    marginTop:10
  },
  cardEmail:{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    marginTop: 50,
    width: 350,
    margin:30,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  ValorTotal:{
    fontSize:15,
    alignSelf: 'flex-start',
    paddingLeft:35,
    fontWeight:'bold'
  },
  CardValidarPlano:{
    backgroundColor: '#3BBDED',
    height: 50,
    width:285,
    borderRadius:12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:35,
    marginTop:20,
    
    

  },
  ValidarPlano:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  lottie: {
    width: 200, 
    height: 80, 
  },
});

export default Pagamento;
