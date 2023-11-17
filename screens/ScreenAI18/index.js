import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native';

const TransactionScreen = () => {
  const [transactions, setTransactions] = useState([{
    id: '1',
    type: 'Sent',
    time: '10:00 AM',
    date: '01/01/2022',
    amount: '100'
  }, {
    id: '2',
    type: 'Received',
    time: '11:00 AM',
    date: '01/02/2022',
    amount: '200'
  } // Add more dummy data as needed
  ]);
  return <SafeAreaView style={_styles.TorcsVwo}>
      <View style={_styles.xGfpOceV}>
        <Button title="Create a new transaction" onPress={() => {}} />
        <Button title="Sent transactions" onPress={() => {}} />
        <Button title="Received transactions" onPress={() => {}} />
        <Button title="All transactions" onPress={() => {}} />
        <TextInput placeholder="Search" style={_styles.bNfhturt} />
        <TextInput placeholder="Filter by date or set a time period" style={_styles.nZXpUADO} />
      </View>
      <FlatList data={transactions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.iSwRnkMN}>
            <Text>Transaction ID: {item.id}</Text>
            <Text>Transaction type: {item.type}</Text>
            <Text>Transaction time: {item.time}</Text>
            <Text>Transaction date: {item.date}</Text>
            <Text>Transaction amount: {item.amount}</Text>
            <Button title="See details" onPress={() => {}} />
          </View>} />
    </SafeAreaView>;
};

export default TransactionScreen;

const _styles = StyleSheet.create({
  TorcsVwo: {
    flex: 1,
    backgroundColor: "#fff"
  },
  xGfpOceV: {
    padding: 20
  },
  bNfhturt: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  nZXpUADO: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  iSwRnkMN: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});