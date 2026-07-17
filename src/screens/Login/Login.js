import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Image,
  StyleSheet 
} from 'react-native';

import Logo from '../../../assets/images/pizza-premium.png';

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
    backgroundColor:'#FFF8F0',
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
    borderColor:'#CCCCCC',
    borderRadius:8,
    padding:12,
    marginBottom:15,
    backgroundColor:'#FFFFFF',
  },

  button:{
    backgroundColor:'#D62828',
    padding:15,
    borderRadius:8,
    alignItems:'center',
    marginTop:10,
  },

  buttonText:{
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'bold',
  },

  register:{
    marginTop:25,
    textAlign:'center',
    color:'#D62828',
    fontSize:18,
    fontWeight:'bold',
  }

});