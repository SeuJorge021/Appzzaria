import { View, Image, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

import Logo from '../../../assets/images/pizza-premium.png';

export default function CadastroUsuario({ navigation }) {

  return (

    <View style={styles.container}>

      <Image
  source={Logo}
  style={styles.logo}
/>

      <Text style={styles.titulo}>
        Criar Conta
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
      />

      <TextInput
        placeholder="E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        style={styles.input}
      />

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>
          Criar Conta
        </Text>
      </Pressable>

      <Text style={styles.textoLogin}>
        Já possui uma conta?
      </Text>

      <Pressable style={styles.botaoSecundario}
  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textoBotaoSecundario}>
          Entrar
        </Text>
      </Pressable>

    </View>

  );

}