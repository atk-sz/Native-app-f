import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchCategory = ( {value, onChangeText, onSearch} ) => {
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Search here.."
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity onPress={onSearch} style={styles.btn}>
        <Text style={styles.btnAdd}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    flex: 3,
    height: 50,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    flex: .7,
    backgroundColor: '#c2bad8',
    padding: 9
  },
  btnAdd: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontSize: 20
  }
});
export default SearchCategory;