import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getFeed } from '../api/feed';
import CategoryView from '../components/Category';
import Item from '../components/Item';

const CategoryScreen = ({ route, navigation }) => {
  const { name, press} = route.params;
  const [data, setdata] = useState([])
  useEffect(() => {
    loadFeed();
  }, [])
  const loadFeed = () => {
    getFeed(name, 10)
      .then(res => {
        setdata(res.data.data.articles)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <SafeAreaView>
      <CategoryView name={name} data={data} press={press}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {
    display: 'flex',
    marginVertical: 20,
    padding: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 23,
    backgroundColor: '#666666',
    textTransform: 'uppercase',
    paddingHorizontal: 30,
    paddingVertical: 10,
    maxWidth: 200,
  }
});
export default CategoryScreen;