/*
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Que mas hermano")};
  const [name, setName] = useState(""); 
  return (

    <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.text}> Color 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Color 2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>Color 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Color 4</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>Color 5</Text>
        </View>
        <View style={styles.box6}>
          <Text style={styles.text}>Color 6</Text>
        </View>
      </View>
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    position: 'absolute',
    top: 60,
    left: 40,
    width: 160,
    height: 160,
    backgroundColor: '#E70EE4'
  },
  box2: {
    position: 'absolute',
    top: 60,
    left: 300,
    width: 160,
    height: 160,
    backgroundColor: '#E7D00E'
  },
  box3: {
    position: 'absolute',
    top: 350,
    left: 40,
    width: 160,
    height: 160,
    backgroundColor: '#8BE70E'
  },
  box4: {
    position: 'absolute',
    top: 350,
    left: 300,
    width: 160,
    height: 160,
    backgroundColor: '#199054'
  },
  box5: {
    position: 'absolute',
    top: 600,
    left: 40,
    width: 160,
    height: 160,
    backgroundColor: '#196E90'
  },
  box6: {
    position: 'absolute',
    top: 600,
    left: 300,
    width: 160,
    height: 160,
    backgroundColor: '#1D1990'
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50
  }
});
*/


import React,{useState} from 'react';
import { StyleSheet, 
  Text, View, Image, 
  TextInput, Button,
  Alert } from 'react-native';

export default function App() {
  //const saludo = () =>{Alert.alert("Hola Cesde")};
  //const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/icon.png')}/>
      <Text  style={styles.Text1}>Company Name</Text>
      <TextInput maxLength={5} placeholderTextColor="#000" style={styles.textInput} placeholder="Email" onChangeText={(text)=>setName(text)}/>
      <Text></Text>
      <TextInput maxLength={5} placeholderTextColor="#000" style={styles.textInput1} placeholder="Password" onChangeText={(text)=>setName(text)}/>
    
      <Button
          title="GET STARTED"
          color="#2C26CF"
          width="150"
          borderRadius="25"
          
        />
      
        <Text  style={styles.texto1} >Create Account</Text>
        <Text style={styles.texto2} >Forgot Password</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACABB4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo: {
    width: 180,
    height: 180,
    top: -120
  },
  textInput: {
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    top: -170,
    borderRadius: 25,
    width: 400,
    height: 50,
    textAlign: 'center',
    padding: 15
  },

  textInput1: {
    borderColor: '#000000',
    top: -170,
    borderWidth: 1,
    borderRadius: 25,
    width: 400,
    height: 50,
    textAlign: 'center'
  },
  Text1: {
    top: -130,
    height: 150,
    width: 250,
    fontSize: 30,
  },
  button: {
    top: -140,
    width: 400,
    height: 50,
    textAlign: 'center',
    borderRadius: 25
  },
  texto1:{
    position: 'absolute',
    left: 20,
    height: 160,
    width: 250,
    fontSize: 15,
    top: 710,
  },
  texto2:{
    position: 'absolute',
    left: 300,
    height: 160,
    width: 250,
    top: 710,
    fontSize: 15
  }
});
