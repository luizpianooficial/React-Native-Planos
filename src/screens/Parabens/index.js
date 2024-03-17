import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function Parabens() {
  return (
    <View style={styles.Main}>
      <View>
       
        <Image
          source={require("../../assets/Header.png")}
          style={styles.headerImage}
        />
      </View>

      <View style={styles.cardImageContainer}>
       
        <Animatable.Image
          animation="fadeIn"
          delay={200}
          source={require("../../assets/Group.png")}
          style={styles.cardImage}
          resizeMode="contain" 
        />
      </View>
      <View style={styles.VText1}>
      <Animatable.Text deplay = {600} animation = "fadeInUp" style={styles.Text1}>Parabéns!</Animatable.Text>
      <Animatable.Text deplay = {600} animation = "fadeInUp" style={styles.Text2}>Agradecemos  por escolher um plano em nosso site. Sua confiança é fundamental para nós, e estamos comprometidos 
      em oferecer a você o melhor serviço possível. Seja bem-vindo à projeto do Luiz Gustavo!</Animatable.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1
  },
  cardImageContainer: {
    // backgroundColor: "red",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    height: 300, 
    width: "80%", 
    // marginTop:450,
    // backgroundColor: 'red'
  },
  VText1:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text1:{
    color:'#3BBDED',
    fontSize:30,
    fontWeight:'bold',
    // backgroundColor: 'pink',
    

  },
  Text2:{
    color: '#a1a1a1',
    fontSize: 12,
    marginTop: 30
    // backgroundColor: 'pink'

  }
});
