import React from 'react';
import { StyleSheet, Alert, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 200, borderColor: "black", borderWidth: 1 }}
          value={this.state.text}
          onChangeText={(text) => this.setState({name: text})}
          onSubmitEditing={() => Alert.alert("onSubmitEditing")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
