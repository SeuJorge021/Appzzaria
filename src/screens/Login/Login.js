import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import Logo from '../../../assets/images/pizza-premium.png';

import theme from '../../styles/theme';

export default function Login({ navigation })  {

  return (

    <View style={styles.container}>

      <Image
  source={Logo}
  style={styles.logo}
/>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          ENTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
  onPress={() => navigation.navigate('CadastroUsuario')}
>
  <Text style={styles.register}>
    Criar uma conta
  </Text>
</TouchableOpacity>

    </View>

  );

}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor: theme.colors.background,
  },

  logo:{
    width:400,
    height:220,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:20,
  },

 input:{
  borderWidth:1,
  borderColor: theme.colors.border,
  borderRadius:8,
  padding:12,
  marginBottom:15,
  backgroundColor: theme.colors.white,
},

  button:{
  backgroundColor: theme.colors.primary,
  padding:15,
  borderRadius:8,
  alignItems:'center',
  marginTop:10,
},

  buttonText:{
  color: theme.colors.white,
  fontSize:18,
  fontWeight:'bold',
},
  register:{
  marginTop:25,
  textAlign:'center',
  color: theme.colors.primary,
  fontSize:18,
  fontWeight:'bold',
}

});