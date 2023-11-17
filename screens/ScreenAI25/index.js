import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
const dummyData = {
  cards: [{
    id: '1',
    cardNumber: '1234 5678 9012 3456',
    cardType: 'Visa',
    transactions: [{
      id: 't1',
      amount: '$200',
      date: '2021-09-01',
      merchant: 'Amazon',
      type: 'Purchase'
    } // More transactions...
    ]
  } // More cards...
  ]
};

const CardScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Button title="Order a new card" onPress={() => {}} />
        {dummyData.cards.map(card => <View key={card.id} style={styles.card}>
            <Image style={styles.cardImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.cardText}>{card.cardNumber}</Text>
            <Text style={styles.cardText}>{card.cardType}</Text>
            <Button title="Delete card" onPress={() => {}} />
          </View>)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transaction History:</Text>
        {dummyData.cards.map(card => <FlatList key={card.id} data={card.transactions} renderItem={({
        item
      }) => <View style={styles.transaction}>
                <Text style={styles.transactionText}>{item.amount}</Text>
                <Text style={styles.transactionText}>{item.date}</Text>
                <Text style={styles.transactionText}>{item.merchant}</Text>
                <Text style={styles.transactionText}>{item.type}</Text>
              </View>} keyExtractor={item => item.id} />)}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  },
  cardImage: {
    width: 100,
    height: 100
  },
  cardText: {
    fontSize: 16
  },
  transaction: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  },
  transactionText: {
    fontSize: 16
  }
});
export default CardScreen;