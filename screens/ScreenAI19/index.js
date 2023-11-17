import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberScreen = () => {
  const [amount, setAmount] = useState('0,00');
  const numbers = Array.from({
    length: 10
  }, (_, i) => i);

  const handleAddMoney = () => {
    setAmount(prevAmount => (parseFloat(prevAmount.replace(',', '.')) + 1).toFixed(2).replace('.', ','));
  };

  const handleWithdrawMoney = () => {
    setAmount(prevAmount => (parseFloat(prevAmount.replace(',', '.')) - 1).toFixed(2).replace('.', ','));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.amount}>{amount}</Text>
      <View style={styles.dashboard}>
        {numbers.map(number => <Text key={number} style={styles.number}>
            {number}
          </Text>)}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddMoney}>
        <Text style={styles.buttonText}>Add money</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleWithdrawMoney}>
        <Text style={styles.buttonText}>Withdraw money</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20
  },
  dashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  number: {
    fontSize: 32,
    margin: 10
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: 200
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  }
});
export default NumberScreen;