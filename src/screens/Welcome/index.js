import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome(){

  const navigation = useNavigation()


  return(
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          deplay = {200}
          source={require('../../assets/egslogo.png')}
          style={{ width: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View deplay = {600} animation = "fadeInUp"style={styles.containerForm}>
            <Text style={styles.title}> Soluções adequadas para crescimentos satisfatórios </Text>
            <Text style={styles.text}>Faça login para começar </Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
            >
            <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>

      </Animatable.View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3BBDED',
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#3BBDED',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight:'bold',
    marginTop:28,
    marginBottom: 12,
  },
  text:{
    color: '#a1a1a1'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#3BBDED',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color:'#fff',
    fontWeight: 'bold'
  }

})