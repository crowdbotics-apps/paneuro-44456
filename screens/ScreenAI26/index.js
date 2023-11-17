import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const OrderCardScreen = () => {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState('123 Main St');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('10001');
  const [state, setState] = useState('NY');
  const [cardType, setCardType] = useState('Credit');
  const [limit, setLimit] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Order Card</Text>
        <Text>Confirm Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Button title="Edit" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Text>Confirm Address:</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />
        <TextInput style={styles.input} value={city} onChangeText={setCity} />
        <TextInput style={styles.input} value={zip} onChangeText={setZip} />
        <TextInput style={styles.input} value={state} onChangeText={setState} />
        <Button title="Edit" onPress={() => {}} />
        <Button title="Save" onPress={() => {}} />
        <Text>Card Type:</Text>
        <Picker selectedValue={cardType} onValueChange={setCardType}>
          <Picker.Item label="Credit" value="Credit" />
          <Picker.Item label="Debit" value="Debit" />
        </Picker>
        <Text>Default Card Limit:</Text>
        <Text>$5000</Text>
        <Text>Set Limit:</Text>
        <TextInput style={styles.input} value={limit} onChangeText={setLimit} keyboardType="numeric" />
        <Button title="Order Card" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});
export default OrderCardScreen;