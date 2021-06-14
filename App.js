import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name,setName] = useState("Ruslan")
  const [nameInput,setNameInput] = useState("")
  const [ageInput,setAgeInput] = useState(0)
  const [person,setPerson] = useState({name: "Ramile", age: 28})

  
  const updateState = () => {
    setName("Ramile");
    setPerson({name: "Ruslan", age: 27});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}</Text> 
        <Text style={styles.boldText}>Name: {person.name}, Age: {person.age}</Text> 
      </View>
      <View style={styles.body}>
        <Button onPress={() => updateState()} title="Update State" />
      </View>
      <View style={styles.header2}>
        <Text style={styles.boldText}>Name: {nameInput}</Text> 
        <Text style={styles.boldText}>Age: {ageInput}</Text> 
      </View>
      <View>
        <TextInput style={styles.textInput} onChangeText={(val) => setNameInput(val)} placeholder="e.g. John" />
        <TextInput keyboardType="numeric" style={styles.textInput}  onChangeText={(val) => setAgeInput(val)} placeholder="e.g. 25" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:"yellow",
    padding: 20,
  },
  header2: {
    backgroundColor:"pink",
    padding: 20,
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    padding: 20,
    backgroundColor: "green"
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    padding:10,
  }
});
