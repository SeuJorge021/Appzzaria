import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF8F0',
  },

  logo: {
  width: 400,
  height: 220,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginBottom: 20,
},

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#D62828',
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },

  botao: {
    backgroundColor: '#D62828',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textoLogin: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
    color: '#555555',
    fontSize: 16,
  },

  botaoSecundario: {
    alignItems: 'center',
  },

  textoBotaoSecundario: {
    color: '#D62828',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default styles;