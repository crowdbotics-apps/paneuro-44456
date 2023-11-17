import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TransactionScreen = () => {
  const transaction = {
    id: '1234567890',
    date: '2022-01-01',
    time: '12:00 PM',
    type: 'Received',
    amount: '1000',
    accountDetails: 'John Doe, Account No: 1234567890'
  };
  const fraudReport = {
    id: 'FR1234567890',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Transaction Details</Text>
        <Text>ID: {transaction.id}</Text>
        <Text>Date: {transaction.date}</Text>
        <Text>Time: {transaction.time}</Text>
        <Text>Type: {transaction.type}</Text>
        <Text>Amount: {transaction.amount}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Account Details</Text>
        <Text>{transaction.accountDetails}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Fraud Report</Text>
        <Text>ID: {fraudReport.id}</Text>
        <Text>Date: {fraudReport.date}</Text>
        <Text>Time: {fraudReport.time}</Text>
        <TextInput style={styles.input} placeholder="Enter reason for reporting the transaction" />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={() => {}} />
          <Button title="Cancel" onPress={() => {}} color="red" />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default TransactionScreen;