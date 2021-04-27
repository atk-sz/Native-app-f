import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ListItem = ({_id,name,remove,...oth}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{name}</Text>
                <MaterialIcons name="delete" size={24} color="red" onPress={()=> remove(_id) } />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    listItemText:{
        fontSize: 18
    }
});

export default ListItem;