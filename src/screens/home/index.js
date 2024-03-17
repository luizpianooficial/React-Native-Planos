import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import api from "../../Services/Api";
import PlanoCard from "../Planos";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planos: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get('EGSWEB/api/TesteDesenvolvimentoApi/ObterPlanosEgs');
      this.setState({
        planos: response.data,
      });
    } catch (error) {
      console.error('Erro ao obter os planos:', error);
    }
  }

  render() {
    const { planos } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.img}>
          <Image source={require('../../assets/Header.png')} />
        </View>
        <ScrollView>
          <View style={styles.containerCard} >


            {planos.map(plano => (
              <PlanoCard
                key={plano.ID}
                titulo={plano.TITULO}
                descricao={plano.DESCRICAO}
                preco={plano.PRECO}
                vantagens={plano.VANTAGENS}
                id={plano.ID}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    margin: 20,
  },
});
