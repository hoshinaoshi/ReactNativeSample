import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: "佐藤"},
            {key: "鈴木"},
            {key: "高橋"},
            {key: "田中"},
            {key: "伊藤"},
            {key: "渡辺"},
            {key: "山本"},
            {key: "中村"},
            {key: "小林"},
            {key: "加藤"},
            {key: "吉田"},
            {key: "山田"},
            {key: "佐々木"},
            {key: "山口"},
            {key: "松本"},
            {key: "井上"},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 24
  },
  item: {
    padding: 16,
    fontSize: 18,
    height: 64,
  },
})
