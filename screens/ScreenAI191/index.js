import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, TouchableOpacity, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('0,00');
  const [from, setFrom] = useState('Account');
  const [to, setTo] = useState('Account');
  const users = [{
    id: '1',
    name: 'John Doe'
  }, {
    id: '2',
    name: 'Jane Doe'
  } // Add more users as needed
  ];

  const handleSelectUser = user => {
    setSelectedUser(user);
  };

  const handleSend = () => {// Handle send money logic here
  };

  const handleCancel = () => {// Handle cancel logic here
  };

  return <SafeAreaView style={_styles.bbIjqQVb}>
      <View>
        <Text>Transaction ID: {Math.random().toString(36).substring(7)}</Text>
        <Text>Transaction send date: {new Date().toLocaleDateString()}</Text>
        <Text>Transaction send time: {new Date().toLocaleTimeString()}</Text>
      </View>

      <View>
        <TextInput value={search} onChangeText={setSearch} placeholder="Search" />
        <FlatList data={users.filter(user => user.name.includes(search))} keyExtractor={item => item.id} renderItem={({
        item
      }) => <TouchableOpacity onPress={() => handleSelectUser(item)}>
              <Image style={_styles.RmqADgSR} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>} />
      </View>

      <View>
        <Text>Send money to: {selectedUser ? selectedUser.name : ''}</Text>
      </View>

      <View>
        <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" placeholder="0,00" />
        <Text>Use balance from:</Text>
        <Button title="Account" onPress={() => setFrom('Account')} />
        <Button title="Wallet" onPress={() => setFrom('Wallet')} />
        <Text>Transfer to:</Text>
        <Button title="Account" onPress={() => setTo('Account')} />
        <Button title="Wallet" onPress={() => setTo('Wallet')} />
      </View>

      <View>
        <Button title="Send" onPress={handleSend} />
        <Button title="Cancel" onPress={handleCancel} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  bbIjqQVb: {
    flex: 1,
    padding: 20
  },
  RmqADgSR: {
    width: 50,
    height: 50
  }
});