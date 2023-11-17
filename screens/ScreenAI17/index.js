import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, FlatList } from 'react-native';

const App = () => {
  const accounts = [{
    id: '1',
    number: '1234567890',
    status: 'Active',
    balance: '1000'
  }, {
    id: '2',
    number: '0987654321',
    status: 'On Hold',
    balance: '500'
  }];
  const offers = ['Offer 1', 'Offer 2', 'Offer 3'];
  return <SafeAreaView style={_styles.YzpHfbfV}>
      <View style={_styles.eDCJIyKb}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.cTwyPasF} />
        <Text style={_styles.RHBxYQxc}>App Name</Text>
        <View style={_styles.vGKrKGhr}>
          <Button title="Home" onPress={() => {}} />
          <Button title="Wallet" onPress={() => {}} />
          <Button title="Transaction" onPress={() => {}} />
          <Button title="Cards" onPress={() => {}} />
          <Button title="Statements" onPress={() => {}} />
          <Button title="Permissions" onPress={() => {}} />
          <Button title="Fraud Reports" onPress={() => {}} />
          <Button title="Settings" onPress={() => {}} />
          <Button title="Notification" onPress={() => {}} />
        </View>
      </View>

      <ScrollView>
        <View style={_styles.pTbctBrF}>
          <Button title="Add new account" onPress={() => {}} />
          <View style={_styles.DQyCuibZ}>
            <Text style={_styles.DUDkDXxE}>Full Name</Text>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={_styles.GykVogpD} />
          </View>
          <FlatList data={accounts} keyExtractor={item => item.id} renderItem={({
          item
        }) => <View style={_styles.LDXxVoUB}>
                <Text>Account Number: {item.number}</Text>
                <Text>Status: {item.status}</Text>
                <Text>Balance: {item.balance}</Text>
              </View>} />
        </View>

        <View style={_styles.COBOAbdM}>
          <Text style={_styles.mAHuGChV}>Products/Offer Display</Text>
          {offers.map((offer, index) => <Text key={index}>{offer}</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  YzpHfbfV: {
    flex: 1
  },
  eDCJIyKb: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  cTwyPasF: {
    width: 50,
    height: 50
  },
  RHBxYQxc: {
    fontSize: 20,
    fontWeight: "bold"
  },
  vGKrKGhr: {
    flexDirection: "row"
  },
  pTbctBrF: {
    padding: 10
  },
  DQyCuibZ: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  DUDkDXxE: {
    fontSize: 18,
    fontWeight: "bold"
  },
  GykVogpD: {
    width: 50,
    height: 50
  },
  LDXxVoUB: {
    marginTop: 10
  },
  COBOAbdM: {
    padding: 10
  },
  mAHuGChV: {
    fontSize: 18,
    fontWeight: "bold"
  }
});