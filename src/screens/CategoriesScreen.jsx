import React from 'react';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { deleteCategory, getCategories } from '../api/category';
import ListItem from '../components/ListItem';
import SearchCategory from '../components/SearchCategory';

const CategoriesScreen = () => {
  const [data, setData] = useState([],)
  useEffect(() => {
    loadData();
  }, [])
  const loadData = () => {
    getCategories()
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const remove = (id) => {
    Alert.alert(
      "Confirm Again",
      " ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Remove",
          onPress: () => {
            deleteCategory(id)
              .then(res => {
                loadData()
              })
              .catch(err => {
                console.log(err.message)
              })
          }
        }
      ],
      { cancelable: false }
    );

  }


  return (
    <View style={styles.container}>
      <View>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) => <ListItem key={item._id} {...item} remove={remove} />}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  input: { height: 36, borderColor: 'gray', borderWidth: 1, minWidth: 300, marginRight: 5, paddingLeft: 5 },
});
export default CategoriesScreen;