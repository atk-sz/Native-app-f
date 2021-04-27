import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Header = ({ navigation, scene }) => {
    const { title } = scene.__memo[2].options
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <View style={styles.share}>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={openMenu} >
                        <Entypo name="menu" size={26} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'darkslateblue',
        height: 70,
    },
    share: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 27
    },
    mid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        marginLeft: 80,
        marginTop:2.5
    },
    menu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 30,
        marginTop: 4
    }
});
