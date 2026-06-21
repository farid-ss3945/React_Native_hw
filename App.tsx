/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, ImageBackground, Text, Image, Switch, ActivityIndicator, FlatList, Alert } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { Modal, Pressable } from 'react-native';


function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const [count, setCount] = useState(0);

  const [inputText, setInputText] = useState(''); 
  const [status, setStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const tasks=[
    { id: '1', title: 'Learn React Native' },
    { id: '2', title: 'Build Mobile App' },
    { id: '3', title: 'Practice Components' },
    { id: '4', title: 'Finish Homework' },
  ];

  const toggleSwitch = () => setIsEnabled(previous => !previous);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Loading data...</Text>
      </View>
    );
  }

  else{

  return (
    <>
      <ImageBackground style={{ backgroundColor: isEnabled? 'white' : 'black', width: '100%', height: '5%' }}><Switch 
        value={isEnabled}
        onValueChange={toggleSwitch}
        trackColor={{ false: "#f4f3f4", true: "black" }}
        thumbColor={"gray"}

      /></ImageBackground>
      <ImageBackground style={{ backgroundColor: isEnabled? 'black' : 'white',  width: '100%', height: '95%' }}>
        <Image source={require('./assets/images/e074c74644522bdfb75fca87c0e32adf.jpg')} style={{ top: '0%', height: '20%', width: '30%' }} />
        <Text style={{ top: '-15%', left: '50%', height: '5%', width: '30%',color: isEnabled? 'white' : 'black' }}>Tyler Creatorzade</Text>
        <Text style={{ top: '-10%', left: '50%', height: '5%', width: '15%',color: isEnabled? 'white' : 'black' }}>Set Stat:</Text> 
        <Text style={{ top: '-20%', left: '50%', height: '5%', width: '30%' , color: isEnabled? 'white' : 'black' }}>Status: {status}</Text>
        <TextInput 
          style={{ top: '-21%', left: '70%', height: '5%', width: '30%',borderWidth: 1, borderColor: 'black', borderRadius: 5,color:'black',backgroundColor: 'white' }} 
          placeholder="Enter text here..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Update Status" onPress={() => {
          setStatus(inputText);
          setInputText('');
          }
        }  />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text style={{ color: isEnabled? 'white' : 'black' }}>{item.title}</Text>
            </View>
          )}
          style={{ maxHeight: 150 }}
        />
        {/* <View style={{ maxHeight: 150 }}> */}
          <Button
            title="Button"
            onPress={() => Alert.alert('welcome', 'Info about the app')}
          />
        {/* </View> */}

        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={{ top: 20,backgroundColor: 'lightgray', padding: 10 }}>Open Modal</Text>
        </Pressable>

        <Modal visible={modalVisible}>
          <View>
            <Text style={{ top:20 }}>Name:Tyler</Text>
            <Text style={{ top:20 }}>Surname:Creatorzade</Text>
            <Text style={{ top:20 }}>Tasks:</Text>
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={{ top: 20,padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                  <Text style={{ color: isEnabled? 'white' : 'black' }}>{item.title}</Text>
                </View>
              )}
            />
            <Pressable onPress={() => setModalVisible(false)} style={{ top: 40,backgroundColor: 'lightgray', padding: 10 }}>
              <Text>close</Text>
            </Pressable>
          </View>
      </Modal>    

      <Text style={{ top: '10%', left: '50%', height: '5%', width: '30%',color: isEnabled? 'white' : 'black' }}>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Increment" />
      </ImageBackground>
    </>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default App;
