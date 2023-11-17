import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
const dummyData = {
  accountInfo: 'Account 123456789',
  accountBalance: '$5000',
  transactions: Array.from({
    length: 12
  }, (_, i) => ({
    id: i,
    month: `Month ${i + 1}`,
    transactions: Array.from({
      length: Math.floor(Math.random() * 10) + 1
    }, (_, j) => ({
      id: j,
      type: Math.random() > 0.5 ? 'Received' : 'Made',
      amount: `$${Math.floor(Math.random() * 1000) + 1}`
    }))
  }))
};

const StatementScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monthly Statements</Text>
        <Text style={styles.accountInfo}>{dummyData.accountInfo}</Text>
        <Text style={styles.accountBalance}>{dummyData.accountBalance}</Text>
      </View>
      <FlatList data={dummyData.transactions} keyExtractor={item => item.id.toString()} renderItem={({
      item
    }) => <View style={styles.monthContainer}>
            <Text style={styles.month}>{item.month}</Text>
            {item.transactions.map(transaction => <View key={transaction.id} style={styles.transaction}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
              </View>)}
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  accountInfo: {
    fontSize: 18,
    color: '#757575'
  },
  accountBalance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
    marginTop: 10
  },
  monthContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 10
  },
  transactionType: {
    fontSize: 16,
    color: '#424242'
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242'
  }
});
export default StatementScreen;