import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './Item';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { addCategory } from '../api/category'
import { showMessage } from 'react-native-flash-message';

const CategoryView = ({ data, name, press }) => {
    const navigation = useNavigation();

    const addCatHandle = (name) => {
        addCategory(name)
            .then(res => {
                showMessage({
                    message: res.data.name,
                    description: "Added to your news feed, please reopen your app to see the changes",
                    type: "success",
                });
            })
            .catch(err => {
                showMessage({
                    message: "Already added",
                    type: "danger",
                });
            })
    }
    return (
        <View style={styles.category}>
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
                {
                    press ?
                        <TouchableOpacity><Entypo onPress={() => navigation.navigate('Category', { name: name })} style={styles.icon} name="arrow-bold-right" color="black" /></TouchableOpacity> :
                        <TouchableOpacity><AntDesign onPress={() => { addCatHandle(name) }} style={styles.icon} name="plus" color="black" /></TouchableOpacity>
                }
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
            />
        </View>
    );
}

export default CategoryView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 15,
    }
});
