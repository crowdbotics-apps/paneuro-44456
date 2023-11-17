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
  return <SafeAreaView style={_styles.sWthveQx}>
      <View style={_styles.zJmbpjIP}>
        <Button title="Create a new transaction" onPress={() => {}} />
        <Button title="Sent transactions" onPress={() => {}} />
        <Button title="Received transactions" onPress={() => {}} />
        <Button title="All transactions" onPress={() => {}} />
        <TextInput placeholder="Search" style={_styles.FOlGEDRX} />
        <TextInput placeholder="Filter by date or set a time period" style={_styles.cjevQnao} />
      </View>
      <FlatList data={transactions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={_styles.DhRBonoK}>
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
  sWthveQx: {
    flex: 1,
    backgroundColor: "#fff"
  },
  zJmbpjIP: {
    padding: 20
  },
  FOlGEDRX: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  cjevQnao: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  DhRBonoK: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});