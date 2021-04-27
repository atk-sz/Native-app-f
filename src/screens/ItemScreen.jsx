import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ItemScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: item.url }}
        style={{ flex: 1, marginTop: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default ItemScreen;