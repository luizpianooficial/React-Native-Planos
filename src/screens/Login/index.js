import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { useForm, Controller } from 'react-hook-form';

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Informe seu Email"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Informe sua senha")
});

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [credenciaisIncorretas, setCredenciaisIncorretas] = useState(false); // Estado para controlar a exibição da mensagem de credenciais incorretas

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function entrar(data) {
    console.log(data);
    if (data.email === "luiz@gmail.com" && data.senha === "12345678") {
      navigation.navigate('Home', { email: data.email });

    } else {
      // Define credenciaisIncorretas como true para mostrar a mensagem de credenciais incorretas
      setCredenciaisIncorretas(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
          <Image source={require('../../assets/Header.png')} />
        </View>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeard}>
        <Text style={styles.containerHeardText}>Log in</Text>
        <Text style={styles.containerHeardText2}>Insira e-mail e senha para escolher os planos.</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
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
        {errors.email && <Text style={styles.labelError}>{errors.email.message}</Text>}

        <Text style={styles.title}>Senha</Text>
        <View style={[styles.passwordContainer, { borderBottomWidth: 1 }]}>
          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder='**********'
                style={styles.passwordInput}
                secureTextEntry={!showPassword}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.senha && <Text style={styles.labelError}>{errors.senha.message}</Text>}
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#a1a1a1" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(entrar)}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {credenciaisIncorretas && ( // Exibe a mensagem de credenciais incorretas se o estado for true
          <Text style={styles.labelError}>Credenciais inválidas</Text>
        )}

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.buttonTextR}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
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
  },
  containerHeardText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3BBDED',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonRegister: {
    marginTop: 12,
  },
  buttonTextR: {
    color: '#a1a1a1',
    marginTop: 14,
    alignSelf: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  }
});
