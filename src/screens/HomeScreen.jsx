import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, View, SafeAreaView, ScrollView, TextInput, Alert, Text, TouchableOpacity, FlatList } from 'react-native';
import SearchCategory from '../components/SearchCategory';
import Category from '../components/Category';
import { getFeed } from '../api/feed';
import { getCategories } from '../api/category';

const HomeScreen = ({ navigation, route }) => {
  const [value, onChangeText] = useState('')
  const [categorues, setCategorues] = useState([])
  const [data, setdata] = useState([])

  useEffect(() => {
    loadCategoriesAndData();
  }, [])
  const loadCategoriesAndData = () => {
    getCategories()
      .then(res => {
        setCategorues(res.data)
        loadEachFeed(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const loadEachFeed = (all) => {
    all.map(each => loadOne(each))
  }
  const loadOne = ({ name }) => {
    getFeed(name, 5)
      .then(res => {
        setdata(oldArray => [...oldArray, res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onSearch = () => {
    if (value) {
      getFeed(value, 10)
        .then(res => {
          navigation.navigate('Category', { name: value, data: res.data.data.articles, })
        })
        .catch(err => {
          console.log(err.message)
        })
      onChangeText('')
    } else {
      Alert.alert(
        "Error",
        "Please enter a something",
        [
          {
            text: "Ok",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    }
  }

  if (data) {
    // data.map(category => (console.log(category.data.articles[0].publishedAt)))
    // data.map(category => (console.log(category.data.articles)))
    // console.log("brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.search}>
          <SearchCategory value={value} onChangeText={onChangeText} onSearch={onSearch} />
        </View>

        {
          // (data)?(<FlatList
          //   data={data}
          //   renderItem={( category ) => (<Category name={category.name} press='next' data={category.data.articles} />) }
          // />) : ' '
          data ? (data.map(category => (<Category name={category.name} id={category._id} press='next' data={category.data.articles} />))) : ' '
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    borderBottomColor: 'black', borderBottomWidth: 1
  }
});

export default HomeScreen;