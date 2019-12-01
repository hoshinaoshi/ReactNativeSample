import React from 'react';
import { View, Button, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class App extends React.Component {
  _handleOpenWithLinking = () => {
    Linking.openURL("tel:");
  }

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center"}}>
        <Button
          title="Linkingコンポーネントで電話アプリを開く"
          onPress={this._handleOpenWithLinking}
        />
        <Button
          title="WebBrowserコンポーネントでWebサイトを開く"
          onPress={this._handleOpenWithWebBrowser}
        />
      </View>
    );
  }
}
