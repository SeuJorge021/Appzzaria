import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  StyleSheet 
} from 'react-native';

export default function Login() {

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        🍕 APPZZARIA
      </Text>

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

      <Text style={styles.register}>
        Criar uma conta
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
  },

  logo:{
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:40,
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:15,
    marginBottom:15,
    borderRadius:10,
  },

  button:{
    backgroundColor:'red',
    padding:15,
    borderRadius:10,
    alignItems:'center',
  },

  buttonText:{
    color:'#fff',
    fontWeight:'bold',
  },

  register:{
    marginTop:20,
    textAlign:'center',
  }

});