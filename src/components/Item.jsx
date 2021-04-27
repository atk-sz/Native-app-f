import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import getProperDate from './DateCal';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item }) => {
    const { source, content, image, publishedAt } = item;
    const navigation = useNavigation();
    const [updatedDate, setUpdatedDate] = useState('')
    const [publishedAt1, setpublishedAt] = useState(new Date(publishedAt))
    useEffect(() => {
        setDates()
    }, [])
    const setDates = () => {
        const newDate = getProperDate(publishedAt1)
        const dateNow = getProperDate(new Date())
        setUpdatedDate(moment.utc(moment(dateNow, "MM/DD/YYYY HH:mm:ss").diff(moment(newDate, "MM/DD/YYYY HH:mm:ss"))).format("HH:mm:ss"))
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Item', { item: item })}>
            <View style={styles.subContainerLeft}>
                <View style={styles.containerTitle}>
                    <Text numberOfLines={1} style={styles.title}>{source.name}</Text>
                </View>
                <View style={styles.captionContainer}>
                    <Text numberOfLines={2}>{content}</Text>
                </View>
            </View>
            <View style={styles.subContainerRight}>
                <View>
                    <Image source={{
                        uri: image,
                        width: 50,
                        height: 60
                    }} />
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{updatedDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Item;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    subContainerLeft: {
        flex: 2,
        marginHorizontal: 10
    },
    containerTitle: {
        padding: 10,
        paddingLeft: 0,
        paddingRight: 50
    },
    captionContainer: {
        flex: 1,
        paddingRight: 30
    },
    subContainerRight: {
        flex: .7,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    dateContainer: {
        marginTop: 10
    },
    date: {
        fontSize: 10
    },
    title: {
        fontSize: 20,
        letterSpacing: 3,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },

});


