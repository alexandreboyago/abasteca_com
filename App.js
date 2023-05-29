import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {

  const [etanol, setEtanol]        = useState(0)
  const [gasolina, setGasolina]    = useState(0)
  const [calculo, setCalculo]      = useState(0)
  const [resposta, setResposta]    = useState('') 

  useEffect( () => {
    if (calculo >= 0.7){
       setResposta('Etanol')
     } else {
       setResposta('Gasolina')
     }
  }, [calculo] ) 
  
  const handleCalculator = () => {
     setCalculo( etanol / gasolina )
  }



  return (
    <View style={styles.container}>
      <TextInput placeholder="Informe o Valor da Gasolina"
                 placeholderTextColor="rgba(222, 185, 51, 0.7)"
                 style={styles.textInput}
                 onChangeText={t => setGasolina(t)}
                 keyboardType='decimal-pad'
                 />
     
      <TextInput placeholder="Informe o Valor do Etanol"
                 placeholderTextColor="rgba(222, 185, 51, 0.7)"
                 style={styles.textInput}
                 onChangeText={t => setEtanol(t)}
                 keyboardType='decimal-pad'
                 />
     
      <Button title="Calcular" color="rgba(222, 185, 51, 0.7)" onPress={handleCalculator}/>

       {/* <> </>  fragment ou componente fantasma */}
      {calculo != 0 && 
        <>
           <Text style={styles.texto}>Abasteça com {resposta}</Text>
           <Text style={{ ...styles.texto, color: 'rgba(222, 185, 51, 0.9)'}}>{calculo.toFixed(2)}%</Text>
        </>
      }   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 textInput: {
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderBottomColor: 'rgba(222, 185, 51, 0.9)',
    borderBottomWidth: 1,
    underlineColorAndroid: 'transparent',
  },
  texto:{
    textAlign:'center',
    padding:10,
    fontSize:25,
    fontWeight:'bold',
    fontFamily: 'Times New Roman, Times, serif',
  }
 
});
