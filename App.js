import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"

export default function App() {
  const [todos,setTodos] = useState([
    {text: "buy a coffee", key:1},
    {text: "take the trash", key:2},
    {text: "go to grocery", key:3}
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar  />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content : {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
