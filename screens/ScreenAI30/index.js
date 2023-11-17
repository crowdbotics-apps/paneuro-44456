import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  status: 'Pending',
  details: 'Transaction details here',
  note: 'Admin note here'
}, {
  id: '2',
  status: 'Accepted',
  details: 'Transaction details here',
  note: 'Admin note here'
}, {
  id: '3',
  status: 'Denied',
  details: 'Transaction details here',
  note: 'Admin note here'
}];

const FraudReportScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.infoContainer}>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.details}>{item.details}</Text>
              <Text style={styles.note}>{item.note}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  infoContainer: {
    flex: 1,
    padding: 10
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 16,
    marginTop: 10
  },
  note: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray'
  }
});
export default FraudReportScreen;